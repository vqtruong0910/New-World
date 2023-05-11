import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  if (isConnected) return
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB, {
      dbName: 'newworld',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log('Database Connected')
  } catch (error) {
    console.error(error)
  }
}
