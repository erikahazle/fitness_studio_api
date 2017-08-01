export default `
  type FitnessClass {
    _id: String
    name: String
    description: String
  }

  type Status {
    message: String!
  }

  type Query {
    getFitnessClasses: [FitnessClass]
  }

  type Mutation {
    createFitnessClass(name: String!, description: String): FitnessClass
    updateFitnessClass(_id: ID!, name: String, description: String): FitnessClass
    deleteFitnessClass(_id: ID!): Status
  }

  schema {
    query: Query
    mutation: Mutation
  }
`