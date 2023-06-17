export interface IInputProps {
  type?: string 
  value: string 
  placeholder: string 
  className?: string
  id?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> 
  onChange: (event: string) => void
} 