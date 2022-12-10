import { Request, Response, NextFunction } from 'express'
import { errorHandlerMiddleware } from '../../../src/api/middleware'



describe('Error Handler Middleware', () => {
  it('should return 400', () => {
    const req = {} as Request
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response
    const next = {} as NextFunction
    const error = new Error('error')
    error.name = 'ValidationError'
    error.message = 'Bad Request'

    errorHandlerMiddleware(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ message: 'Bad Request' })
  })

  it('should return 404', () => {
    const req = {} as Request
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response
    const next = {} as NextFunction
    const error = new Error('error')
    error.name = 'NotFoundError'
    error.message = 'Not Found'

    errorHandlerMiddleware(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' })
  })

  it('should return 500', () => {
    const req = {} as Request
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response
    const next = {} as NextFunction
    const error = new Error('error')

    errorHandlerMiddleware(error, req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' })

  })
})