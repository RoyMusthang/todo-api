import { TodosController } from "../../../src/app/controllers";
import { MockTodoUseCase, MockTodoValidator } from "../../__mocks__";

describe("todoController edit method unit tests", () => {
  it("should edit a todo", async () => {
    const todoId = "c8aac5ad-a130-4607-85df-8e594bf5b893";
    const todoUseCase = new MockTodoUseCase();
    const todoValidator = new MockTodoValidator();
    const todoController = new TodosController(todoValidator, todoUseCase);

    todoUseCase.edit.mockResolvedValueOnce({ message: "\"todo\" not found" });

    const result = await todoController.edit(todoId, { isDone: true });
    expect(result).toBe(undefined);

  });
})