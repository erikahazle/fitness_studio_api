import mongoose, { Schema } from 'mongoose'

const InstructorClassSchema = new Schema({
  name: String,
  bio: String
})

export default mongoose.model('InstructorClass', InstructorClassSchema)
