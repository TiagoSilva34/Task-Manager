import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ILoginUserProps } from "./interface";
import { useNavigate } from "react-router-dom"
import { MdVisibility, MdVisibilityOff, MdPerson, MdPassword} from "react-icons/md"
import { useDispatch } from "react-redux";
import { setData } from "../../helper/localStorage";
import {
  Box,
  Container,
  Text,
  Title
} from "./styles"
import { FormContainer } from "../../components/Form/styles";
import { LoginService } from "../../services/Login.service";

import { createAuthProvider } from 'react-token-auth';

type Session = { accessToken: string; refreshToken: string};

export const { useAuth, authFetch, login, logout } = createAuthProvider<Session>({
    getAccessToken: session => session.accessToken,
    storage: localStorage,
    onUpdateToken: token =>
        fetch('/update-token', {
            method: 'POST',
            body: token.refreshToken,
        }).then(r => r.json()),
});

export const Login: React.FC<ILoginUserProps> = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  
  const navigate = useNavigate()

  const isValidCreds = useMemo(() => {
    if (!username.length || !password.length) {
      return true
    } else {
      return false
    }
  }, [username, password])

  const signIn = () => {
    LoginService.setSignIn({
      username: username,
      password: password
    })
    .then(response => {
      return response
    })
    .then((session) => login(session))
    
    if(username === "tiago@hotmail.com" && password === "123") {
      navigate('/todo-list')
    }

    setData('usernameLogged', username)
  }

  return (
    <Container>
      <Title className="font-weight-700">Sign in</Title>
      <FormContainer
        className="d-flex-column"
      >
          <Box>
            <Input 
              type="text"
              className="pt pb border-radius"            
              value={username}
              placeholder="Typing your username"
              onChange={setUsername}
            />
          <MdPerson />
          </Box>
          <Box>
            <Input 
              type={showPassword ? "text" : "password"} 
              className="pt pb border-radius"
              value={password}
              placeholder="Typing your username"
              onChange={setPassword}
            />
            <MdPassword />
          </Box>
          {showPassword ? (
              <MdVisibility 
                onClick={() => setShowPassword(false)}
                className="visibilityIcon"
              />
            ) : (
              <MdVisibilityOff 
                onClick={() => setShowPassword(true)}
                className="visibilityIconOff"
              />
          )}
          <Box className="d-flex-row info mb">
            <Text>Remember me</Text>
            <Text>Forgot your password?</Text>
          </Box>
          <Button
            type="submit"
            className="pb pt border-radius mt"
            onClick={signIn}
            disabled={isValidCreds}
          >
            log in
          </Button>
      </FormContainer>
    </Container>
  )
}