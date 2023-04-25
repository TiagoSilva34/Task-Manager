import { IFormProps } from "./interface";
import { FormContainer } from "./styles";

export const Form: React.FC<IFormProps> = ({
  children,
  onSubmit
}) => {
  return (
    <FormContainer
      onSubmit={onSubmit}
    > 
      {children}
    </FormContainer>
  )
}