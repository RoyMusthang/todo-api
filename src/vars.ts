import dotenv from 'dotenv'

dotenv.config()

const { env } = process

export default {
  api: {
    port: Number(env.API_PORT || env.PORT || 3001)
  },
  mongo: {
    uri: env.MONGO_URI || 'mongodb://localhost:27017/mamboo-todo'
  }
}
