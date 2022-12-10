import { Request, Response } from 'express'
import { TodosController } from '../../../src/app/controllers'
import { TodosUseCases } from '../../../src/app/useCases'
import { MockTodoModel, MockTodoUseCase, MockTodoValidator } from '../../__mocks__'

const todoValidator = new MockTodoValidator()
const mockTodoModel = new MockTodoModel()
const todoUseCase = new TodosUseCases(mockTodoModel)

jest.mock('../../../src/app/useCases', () => ({
  TodosUseCases: jest.fn().mockImplementation(() => ({
    list: jest.fn().mockResolvedValueOnce([]),
    add: jest.fn().mockResolvedValueOnce('4f585e32-82c8-465f-bdfe-786dedaa72f7'),
    get: jest.fn().mockResolvedValueOnce({
      "id": "4f585e32-82c8-465f-bdfe-786dedaa72f7",
      "description": "modify",
      "isDone": false,
    }),
    edit: jest.fn().mockResolvedValueOnce({
      "id": "4f585e32-82c8-465f-bdfe-786dedaa72f7",
      "description": "modify",
      "isDone": false,
    }),
    remove: jest.fn().mockResolvedValueOnce(undefined),
  }))
}))

const todoController = new TodosController(todoValidator, todoUseCase)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Todo controller add method unit test', () => {
  it('passing everything correctly is expected to pass', async () => {
    const body = {
      description: 'description',
      isDone: false,
    }

    const controller = await todoController.add(body)

    expect(controller).toEqual({
      "id": "4f585e32-82c8-465f-bdfe-786dedaa72f7",
      "description": "modify",
      "isDone": false,
    })
  })
})