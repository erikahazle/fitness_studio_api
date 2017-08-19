import jwt from 'jsonwebtoken'

import User from '../models/User'
import constants from '../config/constants'

export const requireAuth = async (user) => {
  if (!user || !user._id) {
    throw new Error('Unauthorized')
  }
  const me = await User.findById(user._id)
  if (!me) {
    throw new Error('Unauthorized')
  }

  return me
}

export const decodeToken = (token) => {
  const arr = token.split(' ')

  if (arr[0] === 'Bearer') {
    const decodedToken = jwt.verify(arr[1], constants.JWT_SECRET)
    return decodedToken
  }

  throw new Error('Token not valid!')
}
