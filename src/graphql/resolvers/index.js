import FitnessClassResolvers from './fitnessClassResolver';

export default {
  Query: {
    getFitnessClasses: FitnessClassResolvers.getFitnessClasses
  },
  Mutation: {
	  createFitnessClass: FitnessClassResolvers.createFitnessClass,
	  updateFitnessClass: FitnessClassResolvers.updateFitnessClass
	}
}