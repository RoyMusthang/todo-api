import crypto from 'crypto'
import { TodoDAO } from '../../db'
import { AddTodo, EditTodo, Todo } from '../../types'

export interface ITodosModel {
  list(): Promise<Todo[]>
  add(data: AddTodo): Promise<Todo['id']>
  get(id: Todo['id']): Promise<Todo>
  edit(id: Todo['id'], changes: EditTodo): Promise<void>
  remove(id: Todo['id']): Promise<void>
}

export class TodosModel implements ITodosModel {
  async list(): Promise<Todo[]> {
    const result = await TodoDAO.find({}, '-_id')
    return result as unknown as Todo[]
  }

  async add(data: AddTodo): Promise<Todo['id']> {
    const id = crypto.randomUUID()
    const result = await TodoDAO.create({ id, ...data, createdAt: new Date().toLocaleString('pt-br') })
    return result.id
  }

  async get(id: Todo['id']): Promise<Todo> {
    const result = await TodoDAO.findOne({ id }, '-_id')
    return result as unknown as Todo
  }

  async edit(id: Todo['id'], changes: EditTodo): Promise<void> {
    await TodoDAO.findOneAndUpdate({ id }, { ...changes, updatedAt: new Date().toLocaleString('pt-br') })
  }

  async remove(id: Todo['id']): Promise<void> {
    await TodoDAO.findOneAndRemove({ id })
  }
}