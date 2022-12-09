import { AddTodo, EditTodo, Todo } from '../../types'
import { NotFoundError } from '../errors'
import { TodosModel } from '../models/todos.model'

const NOT_FOUND = '"todo" not found'

export class TodosService {
  constructor(private todosModel: TodosModel) { }

  async list(): Promise<Todo[]> {
    const result = await this.todosModel.list()
    return result
  }
}