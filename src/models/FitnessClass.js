import mongoose, { Schema } from 'mongoose'

const FitnessClassSchema = new Schema({
  name: {type: String, unique : true},
  description: String,
})

export default mongoose.model('FitnessClass', FitnessClassSchema)
