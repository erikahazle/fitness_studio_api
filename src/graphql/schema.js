export default `
  type FitnessClass {
    _id: String
    name: String
    description: String
  }

  type Query {
    getFitnessClasses: [FitnessClass]
  }

  schema {
    query: Query
  }
`