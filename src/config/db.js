/* eslint-disable no-console */

import mongoose from 'mongoose'
import constants from './constants'

mongoose.Promise = global.Promise

mongoose.set('debug', true)

try {
  mongoose.connect(constants.DB_URL, {
    useMongoClient: true,
  })
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useMongoClient: true,
  })
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running ' + constants.DB_URL))
  .on('error', e => {
    throw e
  })
