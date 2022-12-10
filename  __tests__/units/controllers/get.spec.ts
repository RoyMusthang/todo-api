import { TodosController } from "../../../src/app/controllers"
import { MockTodoUseCase, MockTodoValidator } from "../../__mocks__"

describe("todoController get method unit tests", () => {
  it("should get a todo", async () => {
    const todoId = "c8aac5ad-a130-4607-85df-8e594bf5b893"
    const todoUseCase = new MockTodoUseCase()
    const todoValidator = new MockTodoValidator()
    const todoController = new TodosController(todoValidator, todoUseCase)

    todoUseCase.get.mockResolvedValueOnce({
      id: todoId,
      description: "mocked",
      isDone: false,
    })

    await expect(todoController.get(todoId)).resolves.toEqual({
      id: todoId,
      description: "mocked",
      isDone: false,
    })
  })

  it("should throw an error when the todo id is invalid", async () => {
    const todoId = "c8aac5ad-a130-4607-85df-8e594bf5b893"
    const todoUseCase = new MockTodoUseCase()
    const todoValidator = new MockTodoValidator()
    const todoController = new TodosController(todoValidator, todoUseCase)

    todoValidator.paramsId.mockRejectedValueOnce(new Error("mocked"))
    const result = await todoController.get(todoId)

    expect(result).toBe(undefined)
  })
})