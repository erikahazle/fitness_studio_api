export default `
  type FitnessClass {
    _id: String
    name: String
    description: String
  }

  type Query {
    getFitnessClasses: [FitnessClass]
  }

  type Mutation {
    createFitnessClass(name: String!, description: String): FitnessClass
    updateFitnessClass(_id: ID!, name: String, description: String): FitnessClass
  }

  schema {
    query: Query
    mutation: Mutation
  }
`