import mongoose, { Schema } from 'mongoose'

const FitnessClassSchema = new Schema({
  name: String,
  description: String,
})

export default mongoose.model('FitnessClass', FitnessClassSchema)
