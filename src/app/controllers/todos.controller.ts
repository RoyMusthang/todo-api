import { Todo } from '../../types'
import { TodosUseCases } from '../useCases'
import { TodosValidator } from '../validators'

export class TodosController {
  constructor(
    private todosValidator: TodosValidator,
    private todosTodosUseCases: TodosUseCases
  ) { }

  async list(): Promise<Todo[]> {
    const result = await this.todosTodosUseCases.list()
    return result
  }

  async get(params: unknown): Promise<Todo> {
    const { id } = await this.todosValidator.paramsId(params)
    const result = await this.todosTodosUseCases.get(id)
    return result
  }

  async add(body: unknown): Promise<Todo> {
    const data = await this.todosValidator.bodyAdd(body)
    const id = await this.todosTodosUseCases.add(data)
    const result = await this.todosTodosUseCases.get(id)
    return result
  }

  async edit(params: unknown, body: unknown): Promise<Todo> {
    const [{ id }, changes] = await Promise.all([
      this.todosValidator.paramsId(params),
      this.todosValidator.bodyEdit(body)
    ])
    await this.todosTodosUseCases.edit(id, changes)
    const result = await this.todosTodosUseCases.get(id)
    return result
  }

  async remove(params: unknown): Promise<void> {
    const { id } = await this.todosValidator.paramsId(params)
    await this.todosTodosUseCases.remove(id)
  }
}