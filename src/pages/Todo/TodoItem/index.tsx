import { useEffect, useState } from "react";
import { ButtonContainer } from "../../../components/Button/styles";
import { InputContainer} from "../../../components/Input/styles";
import { ITodo } from "../../../models/ITodo";
import { ITodoItemProps } from "./interface";
import { Container, Li } from "./styles";
import { MdDelete } from "react-icons/md"

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onRemoveTodo,
  onCompleteTodo
}) => {

  const handleRemoveTodo = (id: string | number) => {
    onRemoveTodo(id)
  } 

  const handleCompletedTodo = (id: string | number, todo: ITodo) => {
    onCompleteTodo(id, todo)
  }

  return (
    <Container>
      <Li className={todo.completed ? "animate d-flex-row" : "d-flex-row"}>
          <div className="d-flex-column title-and-date">
            <span className={todo.completed ? 'completed' : ''}>{todo.todo}</span>
            {/* <small>Created at: {todo.createAt} - {todo.hour}</small> */}
          </div>

          <div>
            <InputContainer 
              type="checkbox"
              className="mr"
              onClick={() => handleCompletedTodo(todo.todo, todo)}
              defaultChecked={todo.completed}
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