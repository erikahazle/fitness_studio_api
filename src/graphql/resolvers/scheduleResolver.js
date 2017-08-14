import Schedule from '../../models/Schedule'

export default {
  getSchedules: () => Schedule.find({}).populate('location').populate('instructor').populate('fitnessClass'),
  createSchedule: async (_, args) => {
    try {
      return Schedule.create(args)
    } catch (err) {
      throw err
    }
  },
  updateSchedule: async (_, { _id, ...rest }) => {
    try {
      return Schedule.findByIdAndUpdate(_id, rest, { new: true })
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
  }
}
