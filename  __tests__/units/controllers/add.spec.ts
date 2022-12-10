import { TodosController } from '../../../src/app/controllers'
import { MockTodoUseCase, MockTodoValidator } from '../../__mocks__'


const todoValidator = new MockTodoValidator()
const todoUseCase = new MockTodoUseCase()

const todoController = new TodosController(todoValidator, todoUseCase)

describe('Todo controller add method unit test', () => {
  it('passing everything correctly is expected to pass', async () => {
    todoUseCase.add.mockResolvedValueOnce('c8aac5ad-a130-4607-85df-8e594bf5b893')
    todoUseCase.get.mockResolvedValueOnce({
      id: 'c8aac5ad-a130-4607-85df-8e594bf5b893',
      description: 'mocked',
      isDone: false
    })

    const body = {
      description: 'mocked',
      isDone: false
    }

    await expect(todoController.add(body)).resolves.toEqual({
      id: 'c8aac5ad-a130-4607-85df-8e594bf5b893',
      description: 'mocked',
      isDone: false
    })
  })

  it('passing an invalid body is expected to throw an error', async () => {
    todoValidator.bodyAdd.mockRejectedValueOnce(new Error('mocked'))

    const body = {
      description: 'mocked',
      isDone: 'false'
    }

    await expect(todoController.add(body)).rejects.toThrow()
  })
})