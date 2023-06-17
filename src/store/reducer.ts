export interface IUser {
  username: string
  password: string 
}

export const initialState: IUser = {
  username: "",
  password: ""
}

type Action = 
{type: "setUsername", payload: string}
| {type: "setPassword", payload: string}


export const userCurrent = (state = initialState, action: Action) => {
  switch(action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload
      }
    case "setPassword":
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
}