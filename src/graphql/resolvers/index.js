import FitnessClassResolvers from './fitnessClassResolver'
import LocationResolvers from './locationResolver'
import InstructorResolvers from './instructorResolver'
import ScheduleResolvers from './scheduleResolver'
import UserResolvers from './userResolver'
import StudioResolvers from './studioResolver'

export default {
  Query: {
    getFitnessClasses: FitnessClassResolvers.getFitnessClasses,
    getLocations: LocationResolvers.getLocations,
    getInstructors: InstructorResolvers.getInstructors,
    getSchedules: ScheduleResolvers.getSchedules,
    getAdminStudios: StudioResolvers.getAdminStudios,
    getCustomerStudios: StudioResolvers.getCustomerStudios,
    getStudioAdmins: StudioResolvers.getStudioAdmins,
    getStudioCustomers: StudioResolvers.getStudioCustomers,
    me: UserResolvers.me
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
	  deleteInstructor: InstructorResolvers.deleteInstructor,
	  createSchedule: ScheduleResolvers.createSchedule,
	  updateSchedule: ScheduleResolvers.updateSchedule,
	  deleteSchedule: ScheduleResolvers.deleteSchedule,
	  addStudio: StudioResolvers.addStudio,
	  signup: UserResolvers.signup,
	  login: UserResolvers.login
	}
}