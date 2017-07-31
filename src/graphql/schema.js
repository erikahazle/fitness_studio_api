import { buildSchema } from 'graphql'

export default buildSchema(`
  type FitnessClass {
    _id: String
    name: String
    description: String
  }

  type Query {
    getClasses: [FitnessClass]
  }

  schema {
    query: Query
  }
`)