import { TodosController } from "../controllers";
import { TodosModel } from "../models";
import { TodosUseCases } from "../useCases";
import { TodosValidator } from "../validators";

export function makeTodosControllerFactory(): TodosController {
  const todosValidator = new TodosValidator()
  const todosModel = new TodosModel()
  const todosUseCases = new TodosUseCases(todosModel)
  return new TodosController(todosValidator, todosUseCases)
}