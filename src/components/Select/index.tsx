import { ISelectProps, Options as opt } from "./interface";
import { SelectContainer } from "./styles";

export const Select: React.FC<ISelectProps> = ({
  onChange,
  id
}) => {
  return (
    <SelectContainer
      onChange={event => onChange(event.target.value)}
      id={id}
    >
      <option>Select the priority</option>
      <option value={opt.low}>{opt.low}</option>
      <option value={opt.medium} className="red">{opt.medium}</option>
      <option value={opt.high}>{opt.high}</option>
    </SelectContainer>
  )
}