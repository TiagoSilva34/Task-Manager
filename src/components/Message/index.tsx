import { IMessageProps } from "./interface";
import { 
  Container,
  Text 
} from "./styles";

export const Message: React.FC<IMessageProps> = ({
  text,
  className
}) => {
  return (
    <Container
      className=""
    >
      <Text>
        {text}
      </Text>
    </Container>
  )
}