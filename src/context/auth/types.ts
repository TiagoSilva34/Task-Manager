import { IUser } from "../../models/IUser";

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children?: React.ReactNode
}