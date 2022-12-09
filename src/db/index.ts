import { connect, set } from 'mongoose'
import vars from '../vars'
export * from './todos.dao'

set('strictQuery', false)

const mongoose: any = {
  async authenticate(): Promise<void> {
    await connect(vars.mongo.uri)
  }
}

export default mongoose