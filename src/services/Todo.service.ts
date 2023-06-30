import { ITodo } from "../models/ITodo"
import { address } from "./Api.service"
import { api } from "./base_url.service"

const create = async(todo: any): Promise<ITodo | Error> => {
  try {
   return await api.post(address.ADD, {
    headers: { 'Content-Type': 'application/json' },
     ...todo
   })
  } catch (error: any) {
    throw new Error(error.message || "Todo not created!")
  }
}

const getAll = async(): Promise<ITodo[] | Error> => {
  try {
    const { data } = await api.get(address.TODOS)

    return data.todos
  } catch (error: any) {
    throw new Error(error.message || "Todo not found!")
  }
}

const deleteTodo = async(id: string | number): Promise<ITodo[] | Error> => {
  try {
    return await api.delete(`${address.TODOS}/${id}`)
  } catch (error: any) {
    throw new Error(error.message || "Todo not deleted!")
  }
}

const updateTodo = async(id: string | number, todo: ITodo): Promise<ITodo | Error> => {
  try {
    return await api.put(`${address.TODOS}/${id}`, todo)
  } catch (error: any) {
    throw new Error(error.message || "Todo not updated!")
  }
}

const setCompleteTodo = async(id: string | number, todo: ITodo): Promise<ITodo | Error> => {
  try {
    return await api.put(`${address.TODOS}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      ...todo
    })
  } catch (error: any) {
    throw new Error(error.message || "Todo not completed!")
  }
}

export const TodoServices = {
  create,
  getAll,
  deleteTodo,
  updateTodo,
  setCompleteTodo
}