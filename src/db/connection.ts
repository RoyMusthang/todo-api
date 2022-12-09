import mongoose from 'mongoose'
import vars from '../vars'

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(vars.mongo.uri)
  } catch (e) {
    console.error('Database connection failed!')
    process.exit(1)
  }
}