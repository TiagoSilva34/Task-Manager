export interface IInputProps {
  type?: string 
  value: string 
  placeholder: string 
  onClick?: React.MouseEventHandler<HTMLButtonElement> 
  onChange: (event: string) => void
} 