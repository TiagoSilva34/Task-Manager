import { useEffect, useMemo, useState } from "react"
import { ButtonContainer } from "../../components/Button/styles"
import { FormContainer } from "../../components/Form/styles"
import { InputContainer } from "../../components/Input/styles"
import { MdAdd } from "react-icons/md"
import { ITodo } from "../../models/ITodo"

export const Todo: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [priority, setPriority] = useState<string>("")
  const [todo, setTodos] = useState<ITodo[]>([])

  useMemo(() => {

  }, [])

  const onAddTodo = (todo: ITodo) => {

  }

  const onRemoveTodo = (id: string | number) => {

  }

  const onUpdateTodo = (id: string | number, todo: ITodo) => {

  }
  
  useEffect(() => {

  }, [])

  return (
    <>
      <FormContainer>
        <InputContainer 
          type="text"
          value=""
          placeholder="Write a task"
          onChange={() => {}}
        />
        <ButtonContainer
          type="button"
          disabled
          onClick={() => {}}
        >
          <MdAdd />
        </ButtonContainer>
      </FormContainer>
    </>
  )
}