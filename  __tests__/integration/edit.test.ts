import mongo, { TodoDAO } from "../../src/db";
import { fetchHelper } from "../__helpers__/fetch.helper";

describe("Todo /todos edit integration test", () => {
  beforeAll(async () => {
    await mongo.authenticate();
  });

  beforeEach(async () => {
    await TodoDAO.deleteMany({});
  });

  describe("edit todo", () => {
    it("should edit a todo return 200", async () => {
      const data = { description: "todo title", isDone: false };
      const id = crypto.randomUUID()
      const todoCreated = await TodoDAO.create({ id, ...data, createdAt: new Date().toLocaleString('pt-br') })
      const result = await fetchHelper(`/todos/${todoCreated.id}`, { method: "put", body: { description: "new description" } });

      expect(result.status).toBe(200);
      expect(result.body.description).toStrictEqual("new description");
      expect(result.body.isDone).toStrictEqual(false);
      expect(result.body.id).toEqual(id);
    });

    it("should edit a todo return 404", async () => {
      const result = await fetchHelper('/todos/04907ae6-2f71-4f98-bfa4-a3a3e9d060a3', { method: "put", body: { description: "new description" } });

      expect(result.status).toBe(404);
      expect(result.body).toStrictEqual({ message: '"todo" not found' });
    });

    it("should edit a todo return 400", async () => {
      const result = await fetchHelper('/todos/04907ae6-sdasdasda3e9d060a', { method: "put", body: { description: "new description" } });

      expect(result.status).toBe(400);
      expect(result.body).toStrictEqual({ message: '"id" length must be 36 characters long' });
    })
  })
})