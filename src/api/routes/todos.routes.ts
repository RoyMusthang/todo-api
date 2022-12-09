import { Router } from 'express'

const todosRoute = Router()

// editTodo
todosRoute.put('/:id', async (req, res) => {
  res.json(req)
})


// removeTodo
todosRoute.delete('/:id', async (req, res) => {
  res.sendStatus(204)
})

// listTodo
todosRoute.get('/', async (_, res) => {
  res.json('req')
})

// addTodo
todosRoute.post('/', async (req, res) => {
  res.status(201).json(req)
})

export { todosRoute }