export default `
  scalar Date

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

  type Schedule {
    _id: String
    date: String
    duration: String
    instructor: Instructor
    location: Location
    fitnessClass: FitnessClass
    spacesTotal: String
  }

  type User {
    _id: ID!
    email: String!
    firstName: String
    lastName: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Status {
    message: String!
  }

  type Query {
    getFitnessClasses: [FitnessClass]
    getLocations: [Location]
    getInstructors: [Instructor]
    getSchedules: [Schedule]
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
    createSchedule(date: String!, duration: String, instructor: String, location: String!, fitnessClass: String!, spacesTotal: Int): Schedule
    updateSchedule(_id: ID!, date: String, duration: String, instructor: String, location: String, fitnessClass: String, spacesTotal: Int): Schedule
    deleteSchedule(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!): User
    login(email: String!, password: String!): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`