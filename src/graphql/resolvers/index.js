import FitnessClassResolvers from './fitnessClassResolver';
import LocationClassResolvers from './locationClassResolver';

export default {
  Query: {
    getFitnessClasses: FitnessClassResolvers.getFitnessClasses,
    getLocations: LocationClassResolvers.getLocations
  },
  Mutation: {
	  createFitnessClass: FitnessClassResolvers.createFitnessClass,
	  updateFitnessClass: FitnessClassResolvers.updateFitnessClass,
	  deleteFitnessClass: FitnessClassResolvers.deleteFitnessClass,
	  createLocationClass: LocationClassResolvers.createLocationClass,
	  updateLocationClass: LocationClassResolvers.updateLocationClass,
	  deleteLocationClass: LocationClassResolvers.deleteLocationClass
	}
}