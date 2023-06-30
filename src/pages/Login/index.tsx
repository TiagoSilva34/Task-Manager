import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { IUser } from "../../models/IUser";
import { useNavigate } from "react-router-dom"
import { MdVisibility, MdVisibilityOff, MdPerson, MdPassword} from "react-icons/md"
import { toast, ToastContainer } from "react-toastify";
import {
  Box,
  Container,
  Text,
  Title
} from "./styles"
import { FormContainer } from "../../components/Form/styles";
import { useAuth } from "../../context/auth/useAuth";

export const Login: React.FC<IUser> = () => {
  const [email, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  
  const auth = useAuth()
  const navigate = useNavigate()

  const isValidCreds = useMemo(() => {
    if (!email.length || !password.length) {
      return true
    } else {
      return false
    }
  }, [email, password])

  const signIn = () => {
    const creds = {
      email: 'kminchelle',
      password: '0lelplR'
    }

    try {
      auth.authenticate(creds.email, creds.password)
      navigate('/todo-list')

    } catch (err) {
      toast.success('Sorry! Incorrect e-mail or password', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <Title className="font-weight-700">Sign in</Title>
      <FormContainer
        className="d-flex-column"
      >
          <Box>
            <Input 
              type="text"
              className="pt pb border-radius"            
              value={email}
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
            type="button"
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