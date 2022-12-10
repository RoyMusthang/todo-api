
import { TodosValidator } from '../../src/app/validators'


export class MockTodoValidator extends TodosValidator {
  
  paramsId = jest.fn().mockReturnValueOnce({ id: "c8aac5ad-a130-4607-85df-8e594bf5b893" })
  bodyAdd = jest.fn().mockReturnValueOnce({ description: 'mocked', isDone: false })
  bodyEdit = jest.fn().mockReturnValueOnce({ description: 'mocked', isDone: false })
  
}