import app from '../../src/api'
import request from 'supertest'

interface IConfig {
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  token?: string
}

export const fetchHelper = async (endpoint: string, config: IConfig = {}) => {
  const method = config.method || 'get'
  const body = config.body || {}
  const token = config.token || ''

  return request(app)[method](endpoint).set('Authorization', token).send(body)
}
