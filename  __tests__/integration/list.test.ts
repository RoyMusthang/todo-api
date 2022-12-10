import mongo, { TodoDAO } from "../../src/db";
import { fetchHelper } from "../__helpers__/fetch.helper";

describe("Todo /todos list integration test", () => {
  beforeAll(async () => {
    await mongo.authenticate();
  });

  beforeEach(async () => {
    await TodoDAO.deleteMany({});
  });

  describe("list todo", () => {
    it("should list a todo return 200", async () => {
      const data = { description: "todo title", isDone: false };
      const id = crypto.randomUUID()
      const createdAt = new Date()
      await TodoDAO.create({ id, ...data, createdAt })
      const result = await fetchHelper(`/todos`);

      expect(result.status).toBe(200);
    });
  })
})