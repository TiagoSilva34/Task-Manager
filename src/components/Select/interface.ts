export interface ISelectProps {
  onChange: (event: string) => void
  id?: string
}

export enum Options {
  low = "low priority",
  medium = "medium priority",
  high = "high priority"
}