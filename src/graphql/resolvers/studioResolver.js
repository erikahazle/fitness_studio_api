import Studio from '../../models/Studio'
import StudioAdmin from '../../models/StudioAdmin'
import StudioCustomer from '../../models/StudioCustomer'
import { requireAuth } from '../../services/auth'

export default {
  getAdminStudios: async (_, args, { user }) => {
    const studios = await StudioAdmin.find({user: user._id}).populate('studio')
    return studios.map(e => e.studio)
  },
  getCustomerStudios: async (_, args, { user }) => {
    const studios = await StudioCustomer.find({user: user._id}).populate('studio')
    return studios.map(e => e.studio)
  },
  addStudio: async (_, args, { user }) => {
    try {
      const newStudio = await Studio.create(args)
      await StudioAdmin.create({ studio: newStudio._id, user: user._id })
      return newStudio
    } catch (err) {
      throw err
    }
  },
  // addStudioAdmin: async (_, { studio, user }) => {
  //   try {
  //   } catch (err) {
  //     throw err
  //   }
  // }
  // updateStudio: async () => {
  // },
  // deleteStudio: async () => {
  // }
}
