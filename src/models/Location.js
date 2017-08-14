import mongoose, { Schema } from 'mongoose'

const LocationSchema = new Schema({
	name: String,
  address: String
})

export default mongoose.model('Location', LocationSchema)
