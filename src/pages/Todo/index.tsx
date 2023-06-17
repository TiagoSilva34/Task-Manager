import { useEffect, useMemo, useState } from 'react';
import { ButtonContainer } from '../../components/Button/styles';
import { FormContainer } from '../../components/Form/styles';
import { MdAdd } from 'react-icons/md';
import { ITodo } from '../../models/ITodo';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import {  Box, Username, LiItem, Nav, Text, Ul, Link } from './styles';
import { TodoItem } from './TodoItem';
import { TodoServices } from '../../services/Todo.service';
import { formatDate } from '../../utils/formatDate';
import { Button } from '../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatHour } from '../../utils/formatHour';
import { getData, removeData, setData } from '../../helper/localStorage';
import { Title } from './styles';
import { InputContainer } from '../../components/Input/styles';
import { useNavigate } from 'react-router-dom';

export const Todo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [showCompleted] = useState<boolean>(true)
  const [showIncompleted] = useState<boolean>(true)
  const [showAll] = useState<boolean>(true)
  const [showByDate] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const isValid = useMemo(() => {
    if(title.length !== 0 && priority.length !== 0 && priority !== 'Select the priority') {
      return false 
    } else {
      return true
    }
  }, [title, priority]);

  const _todoExists_ = useMemo(() => {
    return todos.find(item => item.title === title)
  }, [title])

  const removeNumberAndSpecialCharacter = useMemo(() => {
    return title.replace(/[^A-Za-z]+/g, ' ');
  }, [title])

  const onCreateTodo = () => {
    if(!!_todoExists_) {
      return
    }

    TodoServices.create({
      id: Math.floor(Math.random() * 100000),
      title: title,
      priority: priority,
      isCompleted: false,
      createAt: formatDate(String(new Date())),
      hour: formatHour(String(new Date())),
    })
    .then(response => {
      if (response instanceof Error) {
        toast.warning(`Sorry! ${response.message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.success('Success! Todo created', {
          position: toast.POSITION.TOP_CENTER
        });
        setLoading(true)
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
        toast.warning(`Sorry! ${response.message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.success('Success! Todo deleted', {
          position: toast.POSITION.TOP_CENTER
        });
        setLoading(true)
      }
    })
    .catch(err => {
      console.log(err)
    })
  };

  const onCompleteTodo = (id: number | string, todo: ITodo) => {
    TodoServices.setCompleteTodo(id, {
      ...todo,
      isCompleted: todo.isCompleted === true ? false : true
    })
    .then(response => {
      if (response instanceof Error) {
        toast.warning(`Sorry! ${response.message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        setLoading(true)
        toast.success(
          todo.isCompleted === true 
          ? "Success! Todo incompleted!" 
          : "Success! Todo completed", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    })
    .catch()
  }

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

  const filterByDate = (event: any) => {
    let date = new Date(event.target.value)
    date.setDate(date.getDate() + 1)
    let dateFormatted = formatDate(String(date))
    
    let filteredByDate = todos 
    if (showByDate) {
      filteredByDate = filteredByDate.filter(item => item.createAt === dateFormatted)
      setAllTodos(filteredByDate)
    }
  }

  const onUpdateTodo = (id: string | number, todo: ITodo) => {
    TodoServices.updateTodo(id, todo)  
  };

  const signOut = () => {
    localStorage.clear()

    navigate("/")
  }
  useEffect(() => {
    TodoServices.getAll()
    .then(response => {
      if (response instanceof Error) {
        alert(response.message)
      } else {
        response.map(item => {
          if(item.isCompleted) {
            setData('__isCompleted__', item.id)
          }
        })
        setTodos(response)
        setAllTodos(response)
        setLoading(false)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }, [loading]);

  return (
    <>
      <Username>
        <ToastContainer />
        Olá {getData('usernameLogged')} , welcolme!
        <Link onClick={signOut}>
          Sign out
        </Link>
      </Username>
      <Title 
        className='font-weight-400 default-text-color'
      >
        Task manager
      </Title>
      <FormContainer
        id="form-add-task"
        className='d-flex-row'
      >
        <Input
          type='text'
          className='pt pb pl'
          id="input-title"
          value={removeNumberAndSpecialCharacter}
          placeholder='Write a task'
          onChange={setTitle}
        />
        <Select onChange={setPriority} id="select-priority" />
        <ButtonContainer 
          type='button' 
          className={isValid ? 'disable btn-add' : 'btn-add'}
          disabled={isValid} 
          onClick={onCreateTodo}
        >
          <MdAdd />
        </ButtonContainer>
      </FormContainer>
      <Nav className='d-flex-row'>
        <Ul>
          <LiItem>
            <Button type="button" onClick={filterAll}>All</Button>
            <Button type="button" onClick={filterIncompleted}>Not completed</Button>
            <Button type="button" onClick={filterCompleted}>Completed</Button>
          </LiItem>
        </Ul>
        <br />
        <Box className='mb mt'>
          <Text> Filter by date: </Text>
          <InputContainer
            type='date'
            onChange={e => filterByDate(e)}
          />
        </Box>
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

        {!allTodos.length && (
          <Text>Nada encontrado</Text>
        )}
      </Ul>
    </>
  );
};
