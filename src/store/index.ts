import { createStore } from "redux"
import { userCurrent } from "./reducer"

export const store = createStore(userCurrent)