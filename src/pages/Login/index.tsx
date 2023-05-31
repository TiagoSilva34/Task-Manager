import { useState } from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { ILoginUserProps } from "./interface";

export const Login: React.FC<ILoginUserProps> = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signIn = () => {
    if (!username.length || !password.length) {
      return
    }

    if(username === "tiago@hotmail.com" && password === "123") {
      
    }
  }

  return (
    <>
      <Form>
          <Input 
            type="text"
            value={username}
            placeholder="Typing your username"
            onChange={setUsername}
          />
           <Input 
            type="password"
            value={password}
            placeholder="Typing your username"
            onChange={setPassword}
          />
          <Button
            type="submit"
            onClick={signIn}
          >
            sign in
          </Button>
      </Form>
    </>
  )
}