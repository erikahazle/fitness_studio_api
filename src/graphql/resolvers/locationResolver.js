import Location from '../../models/Location'

export default {
  getLocations: () => Location.find({}),
  createLocation: async (_, args) => {
    try {
      return Location.create(args)
    } catch (err) {
      throw err
    }
  },
  updateLocation: async (_, { _id, ...rest }) => {
    try {
      return Location.findByIdAndUpdate(_id, rest, { new: true })
    } catch (err) {
      throw err
    }
  },
  deleteLocation: async (_, { _id }) => {
    try {
	    await Location.findByIdAndRemove(_id)
	    return {
	      message: 'Delete Success!'
	    }
	  } catch (err) {
	    throw err
	  }
  }
}
