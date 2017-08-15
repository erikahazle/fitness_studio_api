import mongoose, { Schema } from 'mongoose'

const FitnessClassSchema = new Schema({
  name: {type: String, unique : true, required: true},
  description: String,
})

export default mongoose.model('FitnessClass', FitnessClassSchema)
