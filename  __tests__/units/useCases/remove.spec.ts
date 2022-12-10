import { NotFoundError } from "../../../src/app/errors";
import { TodosUseCases } from "../../../src/app/useCases";
import { MockTodoModel } from "../../__mocks__";

describe('Todo useCases remove method unit test', () => {
  it('should remove a todo', async () => {
    const todosModel = new MockTodoModel();
    const todoUseCases = new TodosUseCases(todosModel);

    todosModel.get.mockResolvedValueOnce({ id: "c8aac5ad-a130-4607-85df-8e594bf5b893", description: 'todo title', isDone: false })
    

    const result = await todoUseCases.remove("c8aac5ad-a130-4607-85df-8e594bf5b893");
    expect(result).toBe(undefined);
  });

  it('should throw a NotFoundError', async () => {
    const todosModel = new MockTodoModel();
    const todoUseCases = new TodosUseCases(todosModel);

    todosModel.get.mockResolvedValueOnce(null)

    await expect(todoUseCases.remove("c8aac5ad-a130-4607-85df-8e594bf5b893")).rejects.toThrow(NotFoundError);
  })
})