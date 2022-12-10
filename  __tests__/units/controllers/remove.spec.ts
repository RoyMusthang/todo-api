import { TodosController } from "../../../src/app/controllers";
import { MockTodoUseCase, MockTodoValidator } from "../../__mocks__";

describe("todoController delete method unit tests", () => {
  it("should delete a todo", async () => {
    const todoId = "c8aac5ad-a130-4607-85df-8e594bf5b893";
    const todoUseCase = new MockTodoUseCase();
    const todoValidator = new MockTodoValidator();
    const todoController = new TodosController(todoValidator, todoUseCase);

    todoUseCase.remove.mockResolvedValueOnce(todoId);

    await expect(todoController.remove(todoId)).resolves.toEqual(undefined);
  });
})