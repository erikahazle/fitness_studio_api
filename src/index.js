/* eslint-disable no-console */

import express from 'express'
import bodyParser from 'body-parser'
import { createServer } from 'http'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './graphql/schema'

import './config/db'
import constants from './config/constants'
// import middlewares from './config/middlewares'
import mocks from './mocks'

const app = express()

// middlewares(app)

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
    if (err) {
      console.error(err)
    } else {
      console.log(`App listen to port: ${constants.PORT}`)
    }
  })
// })
