import { ITodo } from "../models/ITodo"
import { address } from "./Api.service"
import { api } from "./base_url.service"

const create = async(todo: ITodo): Promise<ITodo | Error> => {
  try {
    const { data } = await api.post(address.URL, todo)

    return data
  } catch (error: any) {
    throw new Error(error.message || "Todo not created!")
  }
}

const getAll = async(): Promise<ITodo[] | Error> => {
  try {
    const { data } = await api.get(address.URL)

    return data
  } catch (error: any) {
    throw new Error(error.message || "Todo not found!")
  }
}

const deleteTodo = async(id: string | number): Promise<ITodo[] | Error> => {
  try {
    return await api.delete(`${address.URL}/${id}`)
  } catch (error: any) {
    throw new Error(error.message || "Todo not deleted!")
  }
}

const updateTodo = async(id: string | number, todo: ITodo): Promise<ITodo | Error> => {
  try {
    return await api.put(`${address.URL}/${id}`, todo)
  } catch (error: any) {
    throw new Error(error.message || "Todo not updated!")
  }
}

const setCompleteTodo = async(id: string | number, todo: ITodo): Promise<ITodo | Error> => {
  try {
    return await api.put(`${address.URL}/${id}`, todo)
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