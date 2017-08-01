export default `
  type FitnessClass {
    _id: String
    name: String
    description: String
  }

  type LocationClass {
    _id: String
    name: String
    address: String
  }

  type Status {
    message: String!
  }

  type Query {
    getFitnessClasses: [FitnessClass]
    getLocations: [LocationClass]
  }

  type Mutation {
    createFitnessClass(name: String!, description: String): FitnessClass
    updateFitnessClass(_id: ID!, name: String, description: String): FitnessClass
    deleteFitnessClass(_id: ID!): Status
    createLocationClass(name: String!, address: String): LocationClass
    updateLocationClass(_id: ID!, name: String, address: String): LocationClass
    deleteLocationClass(_id: ID!): Status
  }

  schema {
    query: Query
    mutation: Mutation
  }
`