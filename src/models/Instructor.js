import mongoose, { Schema } from 'mongoose'

const InstructorSchema = new Schema({
  name: {type: String, unique : true, required: true},
  bio: String
})

export default mongoose.model('Instructor', InstructorSchema)
