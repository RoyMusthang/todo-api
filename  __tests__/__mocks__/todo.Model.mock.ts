import { TodosModel } from '../../src/app/models'


export class MockTodoModel extends TodosModel {
  constructor () {
    super()
  }

  list = jest.fn()
  add = jest.fn()
  get = jest.fn()
  edit = jest.fn()
  remove = jest.fn()
}