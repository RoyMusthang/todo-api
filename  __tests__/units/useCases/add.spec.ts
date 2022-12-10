import { TodosUseCases } from "../../../src/app/useCases";
import { MockTodoModel } from "../../__mocks__";

describe('Todo useCases add method unit test', () => {
  it('should add a todo', async () => {
    const todoUseCase = new MockTodoModel();
    const todoUseCases = new TodosUseCases(todoUseCase);

    todoUseCase.add.mockResolvedValueOnce("c8aac5ad-a130-4607-85df-8e594bf5b893");

    const result = await todoUseCases.add({ description: 'todo title', isDone: false });
    expect(result).toBe("c8aac5ad-a130-4607-85df-8e594bf5b893");
  });
})