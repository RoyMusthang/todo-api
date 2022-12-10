import { AddTodo, EditTodo, Todo } from '../../types'
import { TodosModel } from '../models'
import { NotFoundError } from '../errors'

export class TodosUseCases {
  private NOT_FOUND = '"todo" not found'
  constructor(private todosModel: TodosModel) { }

  async list(): Promise<Todo[]> {
    const result = await this.todosModel.list()
    return result
  }
  async add(data: AddTodo): Promise<Todo['id']> {
    const id = await this.todosModel.add(data)
    return id
  }

  async get(id: Todo['id']): Promise<Todo> {
    const todo = await this.todosModel.get(id)
    if (!todo) throw new NotFoundError(this.NOT_FOUND)
    return todo
  }

  async edit(id: Todo['id'], changes: EditTodo): Promise<void> {
    const exists = await this.todosModel.get(id)
    if (!exists) throw new NotFoundError(this.NOT_FOUND)
    await this.todosModel.edit(id, changes)
  }

  async remove(id: Todo['id']): Promise<void> {
    const exists = await this.todosModel.get(id)
    if (!exists) throw new NotFoundError(this.NOT_FOUND)
    await this.todosModel.remove(id)
  }
}