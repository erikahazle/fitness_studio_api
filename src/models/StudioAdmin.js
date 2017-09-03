import mongoose, { Schema } from 'mongoose'

const StudioAdminSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  studio: { type: Schema.ObjectId, ref: 'Studio' },
}, { timestamps: true })

export default mongoose.model('StudioAdmin', StudioAdminSchema)
