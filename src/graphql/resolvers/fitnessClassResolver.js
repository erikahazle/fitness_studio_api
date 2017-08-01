import FitnessClass from '../../models/FitnessClass'

export default {
  getFitnessClasses: () => FitnessClass.find({}),
  createFitnessClass: async (_, args) => {
    try {
      return FitnessClass.create(args)
    } catch (err) {
      throw err
    }
  },
  updateFitnessClass: async (_, { _id, ...rest }) => {
    try {
      return FitnessClass.findByIdAndUpdate(_id, rest, { new: true })
    } catch (err) {
      throw err
    }
  }
}
