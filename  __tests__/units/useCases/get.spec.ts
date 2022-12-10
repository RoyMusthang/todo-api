import { TodosUseCases } from "../../../src/app/useCases";
import { MockTodoModel } from "../../__mocks__";

describe('Todo useCases get method unit test', () => {
  it('should get a todo', async () => {
    const todoUseCase = new MockTodoModel();
    const todoUseCases = new TodosUseCases(todoUseCase);

    todoUseCase.get.mockResolvedValueOnce({
      id: "c8aac5ad-a130-4607-85df-8e594bf5b893",
      description: "todo title",
      isDone: false
    });

    const result = await todoUseCases.get("c8aac5ad-a130-4607-85df-8e594bf5b893");
    expect(result).toEqual({
      id: "c8aac5ad-a130-4607-85df-8e594bf5b893",
      description: "todo title",
      isDone: false
    });
  });

  it('should throw an error if todo not found', async () => {
    const todoUseCase = new MockTodoModel();
    const todoUseCases = new TodosUseCases(todoUseCase);

    todoUseCase.get.mockResolvedValueOnce(null);

    await expect(todoUseCases.get("c8aac5ad-a130-4607-85df-8e594bf5b893")).rejects.toThrowError('"todo" not found');
  })
})