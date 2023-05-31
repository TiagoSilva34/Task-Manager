import { ButtonContainer } from "../../../components/Button/styles";
import { InputContainer } from "../../../components/Input/styles";
import { ITodo } from "../../../models/ITodo";
import { ITodoItemProps } from "./interface";
import { Li } from "./styles";
import { MdDelete } from "react-icons/md"
export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onRemoveTodo,
  onUpdateTodo,
  onCompleteTodo
}) => {
  const handleRemoveTodo = (id: string | number) => {
    onRemoveTodo(id)
  } 

  const handleCompletedTodo = (id: string | number, todo: ITodo) => {
    onCompleteTodo(id, todo)
  }
  return (
    <Li>
      <div>
        <span className={todo.isCompleted ? 'completed' : ''}>{todo.title}</span>
        <small>{todo.createAt}</small>
      </div>

      <div>
        <InputContainer 
          type="checkbox"
          onClick={() => handleCompletedTodo(todo.id, todo)}
        />
        <ButtonContainer
          type="button"
          onClick={() => handleRemoveTodo(todo.id)}
        >
          <MdDelete />
        </ButtonContainer>
      </div>
    </Li>
  )
}