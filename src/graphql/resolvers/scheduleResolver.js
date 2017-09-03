import Schedule from '../../models/Schedule'
import mongoose from 'mongoose'

export default {
  getSchedules: () => Schedule.find({}).populate('location').populate('instructor').populate('fitnessClass'),
  createSchedule: async (_, args) => {
    try {
      return Schedule.findOneAndUpdate({_id: mongoose.Types.ObjectId()}, args, {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
        populate: ['location', 'fitnessClass', 'instructor']
      })
    } catch (err) {
      throw err
    }
  },
  updateSchedule: async (_, { _id, ...rest }) => {
    try {
      return Schedule
        .findByIdAndUpdate(_id, rest, { new: true })
        .populate('location')
        .populate('instructor')
        .populate('fitnessClass')
    } catch (err) {
      throw err
    }
  },
  deleteSchedule: async (_, { _id }) => {
    try {
	    await Schedule.findByIdAndRemove(_id)
	    return {
	      message: 'Delete Success!'
	    }
	  } catch (err) {
	    throw err
	  }
  },
  book: async (_, { _id }, { user }) => {
    try {
      // TODO :: adding a user to bookings array
    } catch (err) {
      throw err
    }
  },
  cancelBooking: async (_, { _id }, { user }) => {
    try {
      // TODO :: adding removing a user from bookings array
    } catch (err) {
      throw err
    }
  }
}
