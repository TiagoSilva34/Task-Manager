export interface IButtonProps {
  type: "submit" | "reset" | "button"
  children: React.ReactNode
  disabled?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}