import { address } from "./Api.service"
import { api } from "./base_url.service"

const loginRequest = async(username: string, password: string): Promise<any | Error> => {
  try {
    const response = await api.post(address.LOGIN, {
      headers: { 'Content-Type': 'application/json' },
      username,
      password
    })

    return response.data
  } catch (error: any) {
    throw new Error(error.message || "Login failed!")
  }
}

export const LoginService = {
  loginRequest
}