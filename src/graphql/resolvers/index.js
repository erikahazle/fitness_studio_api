import FitnessClassResolvers from './fitnessClassResolver'
import LocationResolvers from './locationResolver'
import InstructorResolvers from './instructorResolver'

export default {
  Query: {
    getFitnessClasses: FitnessClassResolvers.getFitnessClasses,
    getLocations: LocationResolvers.getLocations,
    getInstructors: InstructorResolvers.getInstructors
  },
  Mutation: {
	  createFitnessClass: FitnessClassResolvers.createFitnessClass,
	  updateFitnessClass: FitnessClassResolvers.updateFitnessClass,
	  deleteFitnessClass: FitnessClassResolvers.deleteFitnessClass,
	  createLocation: LocationResolvers.createLocation,
	  updateLocation: LocationResolvers.updateLocation,
	  deleteLocation: LocationResolvers.deleteLocation,
	  createInstructor: InstructorResolvers.createInstructor,
	  updateInstructor: InstructorResolvers.updateInstructor,
	  deleteInstructor: InstructorResolvers.deleteInstructor
	}
}