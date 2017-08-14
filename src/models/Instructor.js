import mongoose, { Schema } from 'mongoose'

const InstructorSchema = new Schema({
  name: String,
  bio: String
})

export default mongoose.model('Instructor', InstructorSchema)
