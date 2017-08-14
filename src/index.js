/* eslint-disable no-console */

import express from 'express'
import bodyParser from 'body-parser'
import { createServer } from 'http'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import './config/db'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import constants from './config/constants'
// import middlewares from './config/middlewares'
import mocks from './mocks'

const app = express()

// middlewares(app)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use(bodyParser.json());

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
  })
)

app.use(
	constants.GRAPHQL_PATH,
	bodyParser.json(),
	graphqlExpress({ schema })
)

const graphQLServer = createServer(app)

// mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    console.log('inside listen', err)
    if (err) {
      console.error(err)
    } else {
      console.log(`App listen to port: ${constants.PORT}`)
    }
  })
// })
