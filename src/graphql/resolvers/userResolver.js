import User from '../../models/User'
import { requireAuth } from '../../services/auth'

export default {
  signup: (_, { fullName, username, password, email }) => {
    const [firstName, ...lastName] = fullName.split(' ')
    return User.create({ firstName, lastName, username, password, email })
  },
  login: async (_, { email, password }) => {
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error('User not exist!')
    }

    if (!user.authenticateUser(password)) {
      throw new Error('Password not match!')
    }

    return user
  },

  me: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user)
      return me
    } catch (error) {
      throw error
    }
  }
}
