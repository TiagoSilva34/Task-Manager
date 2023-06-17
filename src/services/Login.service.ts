import { ILogin } from "../models/ILogin"
import { loginAddress } from "./Api.service"
import { api } from "./base_url.service"

const setSignIn = async(login: ILogin): Promise<any | Error> => {
  try {
    const { data } = await api.post(loginAddress.URL, login)

    return data
  } catch (error: any) {
    throw new Error(error.message || "Login failed!")
  }
}

export const LoginService = {
  setSignIn
}