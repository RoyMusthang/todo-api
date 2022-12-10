import { TodosController } from "../../../src/app/controllers";
import { MockTodoUseCase, MockTodoValidator } from "../../__mocks__";

describe("todoController list method unit tests", () => {
  it("should list all todos", async () => {
    const todoUseCase = new MockTodoUseCase();
    const todoValidator = new MockTodoValidator();
    const todoController = new TodosController(todoValidator, todoUseCase);

    todoUseCase.list.mockResolvedValueOnce([
      {
        "id": "dcb68069-bbce-4cc0-a30e-3410d722f717",
        "description": "modify",
        "isDone": false,
        "createdAt": "2022-12-09T19:39:48.436Z",
        "updatedAt": "2022-09-12T20:11:59.000Z"
      },
      {
        "id": "7d86eef0-ee2b-4f6f-9117-c620739ac2d2",
        "description": "dasd",
        "isDone": true,
        "createdAt": "2022-12-09T19:39:49.170Z"
      },
      {
        "id": "1945b3a1-a096-450d-82db-f0526f16f9db",
        "description": "dasdasdsd",
        "isDone": false,
        "createdAt": "2022-12-09T19:53:49.030Z"
      },
    ]);

    await expect(todoController.list()).resolves.toEqual([
      {
        "id": "dcb68069-bbce-4cc0-a30e-3410d722f717",
        "description": "modify",
        "isDone": false,
        "createdAt": "2022-12-09T19:39:48.436Z",
        "updatedAt": "2022-09-12T20:11:59.000Z"
      },
      {
        "id": "7d86eef0-ee2b-4f6f-9117-c620739ac2d2",
        "description": "dasd",
        "isDone": true,
        "createdAt": "2022-12-09T19:39:49.170Z"
      },
      {
        "id": "1945b3a1-a096-450d-82db-f0526f16f9db",
        "description": "dasdasdsd",
        "isDone": false,
        "createdAt": "2022-12-09T19:53:49.030Z"
      },
    ]);
  });

  it("should return an empty array", async () => {
    const todoUseCase = new MockTodoUseCase();
    const todoValidator = new MockTodoValidator();
    const todoController = new TodosController(todoValidator, todoUseCase);

    todoUseCase.list.mockResolvedValueOnce([]);

    await expect(todoController.list()).resolves.toEqual([]);
  });
})
