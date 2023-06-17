import { IInputProps } from "./interface";
import { InputContainer } from "./styles";

export const Input: React.FC<IInputProps> = ({
  type,
  value,
  placeholder,
  className,
  id,
  onClick,
  onChange
}) => {
  return (
    <InputContainer
      type={type}
      value={value}
      className={className}
      id={id}
      placeholder={placeholder}
      onClick={() => onClick}
      onChange={event => onChange(event.target.value)}
    />
  )
}