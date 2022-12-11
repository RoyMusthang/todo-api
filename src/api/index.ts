import express from 'express'
import 'express-async-errors'
import { corsMiddleware, errorHandlerMiddleware } from './middleware'
import { todosRoute } from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

const api = express()

// req middlewares
api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(corsMiddleware)

// routes
api.use('/todos', todosRoute)
api.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

// res middlewares
api.use(errorHandlerMiddleware)

export default api