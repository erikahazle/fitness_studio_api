import mongoose, { Schema } from 'mongoose'

const StudioSchema = new Schema({
  name: {type: String, unique : true, required: true},
  description: String,
  logo: String
})

export default mongoose.model('Studio', StudioSchema)
