import mongoose, { Schema } from 'mongoose'

const LocationClassSchema = new Schema({
	name: String,
  address: String
})

export default mongoose.model('LocationClass', LocationClassSchema)
