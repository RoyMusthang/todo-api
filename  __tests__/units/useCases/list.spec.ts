import { TodosUseCases } from "../../../src/app/useCases";
import { MockTodoModel } from "../../__mocks__";

describe('Todo useCases list method unit test', () => {
  it('should list a todo', async () => {
    const todoUseCase = new MockTodoModel();
    const todoUseCases = new TodosUseCases(todoUseCase);

    todoUseCase.list.mockResolvedValueOnce([
      {
        id: "c8aac5ad-a130-4607-85df-8e594bf5b893",
        description: "todo title",
        isDone: false
      }
    ]);

    const result = await todoUseCases.list();
    expect(result).toEqual([
      {
        id: "c8aac5ad-a130-4607-85df-8e594bf5b893",
        description: "todo title",
        isDone: false
      }
    ]);
  });
})