import LocationClass from '../../models/LocationClass'

export default {
  getLocations: () => LocationClass.find({}),
  createLocationClass: async (_, args) => {
    try {
      return LocationClass.create(args)
    } catch (err) {
      throw err
    }
  },
  updateLocationClass: async (_, { _id, ...rest }) => {
    try {
      return LocationClass.findByIdAndUpdate(_id, rest, { new: true })
    } catch (err) {
      throw err
    }
  },
  deleteLocationClass: async (_, { _id }) => {
    try {
	    await LocationClass.findByIdAndRemove(_id)
	    return {
	      message: 'Delete Success!'
	    }
	  } catch (err) {
	    throw err
	  }
  }
}
