import mongoose, { Schema } from 'mongoose'

const ScheduleSchema = new Schema({
	date: Date,
	duration: String,
	spaces_total: Number,
	instructor: Schema.Types.ObjectId,
	fitnessClass: Schema.Types.ObjectId,
	location: Schema.Types.ObjectId
})

export default mongoose.model('Schedule', ScheduleSchema)
