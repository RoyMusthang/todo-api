import { TodosUseCases } from '../../src/app/useCases'


export class MockTodoUseCase extends TodosUseCases {
  constructor () {
    super({} as any)
  }

  list = jest.fn()
  add = jest.fn()
  get = jest.fn()
  edit = jest.fn()
  remove = jest.fn()
  
}