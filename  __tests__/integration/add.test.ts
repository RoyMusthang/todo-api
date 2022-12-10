import mongo, { TodoDAO } from "../../src/db";
import { fetchHelper } from "../__helpers__/fetch.helper";

describe("Todo /todos add  integration test", () => {
  beforeAll(async () => {
    await mongo.authenticate();
  });

  beforeEach(async () => {
    await TodoDAO.deleteMany({});
  });

  describe("create new todo", () => {
    it("should create a new todo return 201", async () => {
      const todo = { description: "todo title", isDone: false };
      const result = await fetchHelper("/todos", { method: "post", body: todo });
      expect(result.status).toBe(201);
    });

    it("should create a new todo return 400", async () => {
      const todo = { description: 32 };
      const result = await fetchHelper("/todos", { method: "post", body: todo });

      expect(result.status).toBe(400);
      expect(result.body).toStrictEqual({message: "\"description\" must be a string"});
    })
  })
})