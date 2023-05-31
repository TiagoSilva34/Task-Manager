import { useEffect, useMemo, useState } from 'react';
import { ButtonContainer } from '../../components/Button/styles';
import { FormContainer } from '../../components/Form/styles';
import { MdAdd } from 'react-icons/md';
import { ITodo } from '../../models/ITodo';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { LiItem, Link, Nav, Ul } from './styles';
import { TodoItem } from './TodoItem';
import { TodoServices } from '../../services/Todo.service';
import { formatDate } from '../../utils/formatDate';
import { Button } from '../../components/Button';

export const Todo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [showCompleted, setShowCompleted] = useState(true)
  const [showIncompleted, setShowIncompleted] = useState(true)
  const [showAll, setShowAll] = useState(true)



  const isValid = useMemo(() => {
    if(title.length !== 0 && priority.length !== 0 && priority !== 'Select a priority') {
      return false 
    } else {
      return true
    }
  }, [title, priority]);

  const onCreateTodo = () => {
    TodoServices.create({
      id: Math.floor(Math.random() * 100000),
      title: title,
      priority: priority,
      isCompleted: false,
      createAt: formatDate(String(new Date()))
    })
    .then(response => {
      if (response instanceof Error) {
        alert(response.message)
      } else {
        alert("Todo created!")
      }
    })
    .catch(err => {
      console.log(err)
    })
  };

  const onRemoveTodo = (id: string | number) => {
    TodoServices.deleteTodo(id)
    .then(response => {
      if (response instanceof Error) {
        alert(response.message)
      } else {
        alert("Todo deleted!")
      }
    })
    .catch(err => {
      console.log(err)
    })
  };

  const filterCompleted = () => {
    let filteredCompleted = todos
    if (showCompleted) {
      filteredCompleted = filteredCompleted.filter(todos => todos.isCompleted)
      setAllTodos(filteredCompleted)
    }
  }

  const filterIncompleted = () => {
    let filteredIncompleted = todos
    if (showIncompleted) {
      filteredIncompleted = filteredIncompleted.filter(todos => !todos.isCompleted)
      setAllTodos(filteredIncompleted)
    }
  }

  const filterAll = () => {
    let filteredAll = todos 
    if (showAll) {
      filteredAll = filteredAll.filter(todos => todos.isCompleted || !todos.isCompleted)
      setAllTodos(filteredAll)
    }
  }

  const onUpdateTodo = (id: string | number, todo: ITodo) => {
    TodoServices.updateTodo(id, todo)
    
  };

  const onCompleteTodo = (id: number | string, todo: ITodo) => {
    TodoServices.setCompleteTodo(id, {
      ...todo,
      isCompleted: todo.isCompleted ? false : true
    })
    .then(response => {
      if (response instanceof Error) {
        alert(response.message)
      } else {
        alert(todo.isCompleted === true ? "Todo completed!" : "Todo incompleted")
      }
    })
    .catch()
  }

  useEffect(() => {
    TodoServices.getAll()
    .then(response => {
      if (response instanceof Error) {
        alert(response.message)
      } else {
        setTodos(response)
        setAllTodos(response)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <>
      <FormContainer>
        <Input
          type='text'
          value={title}
          placeholder='Write a task'
          onChange={setTitle}
        />
        <Select onChange={setPriority} />
        <ButtonContainer 
          type='button' 
          disabled={isValid} 
          onClick={onCreateTodo}
        >
          <MdAdd />
        </ButtonContainer>
      </FormContainer>
      <Nav>
        <Ul>
          <LiItem>
            <Button type="button" onClick={filterAll}>All</Button>
            <Button type="button" onClick={filterIncompleted}>Not completed</Button>
            <Button type="button" onClick={filterCompleted}>Completed</Button>
          </LiItem>
        </Ul>
      </Nav>
      <Ul>
        {allTodos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}
      </Ul>
    </>
  );
};
