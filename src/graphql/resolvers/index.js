import FitnessClassResolvers from './fitnessClassResolver';

export default {
  Query: {
    getFitnessClasses: FitnessClassResolvers.getClasses
  }
}