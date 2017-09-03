import mongoose, { Schema } from 'mongoose'

const ScheduleSchema = new Schema({
	date: Date,
	duration: String,
	spacesTotal: Number,
	instructor: { type: Schema.ObjectId, ref: 'Instructor' },
	fitnessClass: { type: Schema.ObjectId, ref: 'FitnessClass' },
	location: { type: Schema.ObjectId, ref: 'Location' },
	bookings: [{ type: Schema.ObjectId, ref: 'User' }]
})

export default mongoose.model('Schedule', ScheduleSchema)
