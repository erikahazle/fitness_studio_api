export default `
  type FitnessClass {
    _id: String
    name: String
    description: String
  }

  type Location {
    _id: String
    name: String
    address: String
  }

  type Instructor {
    _id: String
    name: String
    bio: String
  }

  type Status {
    message: String!
  }

  type Query {
    getFitnessClasses: [FitnessClass]
    getLocations: [Location]
    getInstructors: [Instructor]
  }

  type Mutation {
    createFitnessClass(name: String!, description: String): FitnessClass
    updateFitnessClass(_id: ID!, name: String, description: String): FitnessClass
    deleteFitnessClass(_id: ID!): Status
    createLocation(name: String!, address: String): Location
    updateLocation(_id: ID!, name: String, address: String): Location
    deleteLocation(_id: ID!): Status
    createInstructor(name: String!, bio: String): Instructor
    updateInstructor(_id: ID!, name: String, bio: String): Instructor
    deleteInstructor(_id: ID!): Status
  }

  schema {
    query: Query
    mutation: Mutation
  }
`