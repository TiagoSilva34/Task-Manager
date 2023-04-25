import { ISelectProps, Options as opt } from "./interface";
import { SelectContainer } from "./styles";

export const Select: React.FC<ISelectProps> = ({
  onChange
}) => {
  return (
    <SelectContainer
      onChange={event => onChange(event.target.value)}
    >
      <option>Select a priority</option>
      <option value={opt.low}>{opt.low}</option>
      <option value={opt.medium}>{opt.medium}</option>
      <option value={opt.high}>{opt.high}</option>
    </SelectContainer>
  )
}