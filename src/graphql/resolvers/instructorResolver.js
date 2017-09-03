import Instructor from '../../models/Instructor'
import { requireAuth } from '../../services/auth'

export default {
  getInstructors: () => Instructor.find({}),
  createInstructor: async (_, args) => {
    try {
      return Instructor.create(args)
    } catch (err) {
      throw err
    }
  },
  updateInstructor: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user)
      // user should be part of the studio?
      return Instructor.findByIdAndUpdate(_id, rest, { new: true })
    } catch (err) {
      throw err
    }
  },
  deleteInstructor: async (_, { _id }) => {
    try {
	    await Instructor.findByIdAndRemove(_id)
	    return {
	      message: 'Delete Success!'
	    }
	  } catch (err) {
	    throw err
	  }
  }
}
