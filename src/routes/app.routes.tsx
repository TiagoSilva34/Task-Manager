import { 
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom"
import { Login } from "../pages/Login"
import { Todo } from "../pages/Todo"
import { useAuth } from "../auth";

export const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo-list" element={<Todo />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}