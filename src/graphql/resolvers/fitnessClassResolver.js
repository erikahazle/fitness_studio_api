import FitnessClass from '../../models/FitnessClass'

export default {
  getFitnessClasses: () => FitnessClass.find({})
}
