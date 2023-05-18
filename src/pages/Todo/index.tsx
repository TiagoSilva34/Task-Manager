import { useEffect, useMemo, useState } from 'react';
import { ButtonContainer } from '../../components/Button/styles';
import { FormContainer } from '../../components/Form/styles';
import { MdAdd } from 'react-icons/md';
import { ITodo } from '../../models/ITodo';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { Ul } from './styles';
import { TodoItem } from './TodoItem';
import { TodoServices } from '../../services/Todo.service';

export const Todo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const isValid = useMemo(() => {
    if(title.length !== 0 && priority.length !== 0 && priority !== 'Select a priority') {
      return false 
    } else {
      return true
    }
  }, [title, priority]);

  const onCreateTodo = () => {
    TodoServices.create({
      title: title,
      priority: priority,
      isCompleted: false,
      createAt: String(new Date())
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

  const onRemoveTodo = (id: string | number) => {};

  const onUpdateTodo = (id: string | number, todo: ITodo) => {};

  useEffect(() => {
    TodoServices.getAll()
    .then(response => {
      if (response instanceof Error) {
        alert(response.message)
      } else {
        setTodos(response)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }, [todos]);

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
      <Ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </Ul>
    </>
  );
};
