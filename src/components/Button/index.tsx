import { IButtonProps } from "./interface";
import { ButtonContainer } from "./styles";

export const Button: React.FC<IButtonProps> = ({
  type,
  children,
  disabled,
  className,
  onClick
}) => {
  return (
    <ButtonContainer
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}