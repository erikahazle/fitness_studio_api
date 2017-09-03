import Studio from '../../models/Studio'
import StudioAdmin from '../../models/StudioAdmin'
import StudioCustomer from '../../models/StudioCustomer'
import { requireAuth } from '../../services/auth'

export default {
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
  // },
  // addStudioCustomer: async (_, { studio, user }) => {
  //   try {
  //   } catch (err) {
  //     throw err
  //   }
  // }
  // updateStudio: async () => {
  // },
  // deleteStudio: async () => {
  // },
  getAdminStudios: async (_, args, { user }) => {
    const studios = await StudioAdmin.find({user: user._id}).populate('studio')
    return studios.map(e => e.studio)
  },
  getCustomerStudios: async (_, args, { user }) => {
    const studios = await StudioCustomer.find({user: user._id}).populate('studio')
    return studios.map(e => e.studio)
  },
  getStudioAdmins: async (_, { studio }) => {
    const studios = await StudioAdmin.find({studio}).populate('user')
    return studios.map(e => e.user)
  },
  getStudioCustomers: async (_, { studio }) => {
    const studios = await StudioCustomer.find({studio}).populate('user')
    return studios.map(e => e.user)
  }
}
