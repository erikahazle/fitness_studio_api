import mongoose, { Schema } from 'mongoose'

const StudioCustomerSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  studio: { type: Schema.ObjectId, ref: 'Studio' },
}, { timestamps: true })

export default mongoose.model('StudioCustomer', StudioCustomerSchema)
