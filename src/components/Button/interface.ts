export interface IButtonProps {
  type: "submit" | "reset" | "button"
  children: React.ReactNode
  disabled?: boolean
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}