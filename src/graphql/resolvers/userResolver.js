import User from '../../models/User';

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

    return user;
  }
}
