import { IButtonProps } from "./interface";
import { ButtonContainer } from "./styles";

export const Button: React.FC<IButtonProps> = ({
  type,
  children,
  disabled,
  onClick
}) => {
  return (
    <ButtonContainer
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}