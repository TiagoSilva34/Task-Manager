import { ITodo } from "../../../models/ITodo";

export interface ITodoItemProps {
  todo: ITodo,
  onRemoveTodo: (id: number | string) => void 
  onCompleteTodo: (id: number | string, todo: ITodo) => void
}