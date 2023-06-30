import { createContext, useEffect, useState } from 'react'
import { IContext, IAuthProvider  } from './types'
import { IUser } from '../../models/IUser'
import { LoginService } from '../../services/Login.service'
import { getDataLocalStorage, removeItemLocalStorage, setDataLocalStorage } from '../../helper/localStorage'


export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()
  
  useEffect(() => {
    const user = getDataLocalStorage('__authenticationToken__')

    if(user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginService.loginRequest(email, password)

    if(response) {
      const payload = {
        token: response.token, 
        email: response.email
      }
      
      setDataLocalStorage('__authenticationToken__', payload)
      setUser(payload)
    }
  }

  async function logout() {
    setUser(null)
    removeItemLocalStorage('__authenticationToken__')
  }

  return (
    <AuthContext.Provider value={{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  )
}