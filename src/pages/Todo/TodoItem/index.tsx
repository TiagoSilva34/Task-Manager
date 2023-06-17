import { useEffect, useState } from "react";
import { ButtonContainer } from "../../../components/Button/styles";
import { InputContainer} from "../../../components/Input/styles";
import { ITodo } from "../../../models/ITodo";
import { ITodoItemProps } from "./interface";
import { Container, Li } from "./styles";
import { MdDelete } from "react-icons/md"
import { getData } from "../../../helper/localStorage";
export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onRemoveTodo,
  onUpdateTodo,
  onCompleteTodo
}) => {
  const [todoId, setTodoId] = useState<any>(undefined)
  const [ids, setIds] = useState<any>({})


  const handleRemoveTodo = (id: string | number) => {
    onRemoveTodo(id)
  } 

  const handleCompletedTodo = (id: string | number, todo: ITodo) => {
    setTodoId(id)
    onCompleteTodo(id, todo)
  }

  return (
    <Container>
      <Li className={todo.isCompleted ? "animate d-flex-row" : "d-flex-row"}>
          <div className="d-flex-column title-and-date">
            <span className={todo.isCompleted ? 'completed' : ''}>{todo.title}</span>
            <small>Created at: {todo.createAt} - {todo.hour}</small>
          </div>

          <div>
            <InputContainer 
              type="checkbox"
              className="mr"
              onClick={() => handleCompletedTodo(todo.id, todo)}
              defaultChecked={todo.isCompleted}
            />
            <ButtonContainer
              type="button"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              <MdDelete />
            </ButtonContainer>
          </div>
        </Li>
    </Container>
  )
}