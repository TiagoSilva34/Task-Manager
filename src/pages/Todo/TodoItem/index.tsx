import { ButtonContainer } from "../../../components/Button/styles";
import { InputContainer } from "../../../components/Input/styles";
import { ITodoItemProps } from "./interface";
import { Li } from "./styles";
import { MdDelete } from "react-icons/md"
export const TodoItemProps: React.FC<ITodoItemProps> = ({
  todo
}) => {
  return (
    <Li>
      <div>
        <span>{todo.title}</span>
        <small>{todo.createAt}</small>
      </div>

      <div>
        <InputContainer 
          type="checkbox"
          onClick={() => {}}
        />
        <ButtonContainer
          type="button"
          onClick={() => {}}
        >
          <MdDelete />
        </ButtonContainer>
      </div>
    </Li>
  )
}