import Schedule from '../../../graphql/resolvers/scheduleResolver'
import Location from '../../../graphql/resolvers/locationResolver'
import FitnessClass from '../../../graphql/resolvers/fitnessClassResolver'
import Instructor from '../../../graphql/resolvers/instructorResolver'
import { setupTest } from '../setup'

describe('ScheduleResolver', () => {
	let location, fitnessClass, instructor
	beforeEach(async () => {
		await setupTest()
		location = await Location.createLocation(null, {name: 'name1', address: 'test1'})
		fitnessClass = await FitnessClass.createFitnessClass(null, {name: 'name1', description: 'test1'})
		instructor = await Instructor.createInstructor(null, {name: 'name1', bio: 'test1'})
	})

	it('should create a schedule', async () => {
		const args = {
			date: new Date(),
			duration: '45 minutes',
			spacesTotal: 25,
			instructor: instructor._id,
			fitnessClass: fitnessClass._id,
			location: location._id
		}
		const newSchedule = await Schedule.createSchedule(null, args)

		expect(newSchedule._id).toBeTruthy()

		// location, instructor and fitnessClass details should be populated
		expect(newSchedule.location.name).toEqual(location.name)
		expect(newSchedule.instructor.name).toEqual(instructor.name)
		expect(newSchedule.fitnessClass.name).toEqual(fitnessClass.name)
	})

	it('should getSchedules', async () => {
		const args1 = {
			date: new Date(),
			duration: '45 minutes',
			spacesTotal: 25,
			instructor: instructor._id,
			fitnessClass: fitnessClass._id,
			location: location._id
		}
		const args2 = {
			date: new Date(),
			duration: '45 minutes',
			spacesTotal: 20,
			fitnessClass: fitnessClass._id,
			location: location._id
		}

		await Schedule.createSchedule(null, args1)
		await Schedule.createSchedule(null, args2)

		const allSchedules = await Schedule.getSchedules()
		expect(allSchedules.length).toEqual(2)
	})

	it('should updateLocation', async () => {
		const args1 = {
			date: new Date(),
			duration: '45 minutes',
			spacesTotal: 25,
			instructor: instructor._id,
			fitnessClass: fitnessClass._id,
			location: location._id
		}

		const location2 = await Location.createLocation(null, {name: 'hello2', address: 'blah'})
		const args2 = {spacesTotal: 20, location: location2._id}

		const newSchedule = await Schedule.createSchedule(null, args1)
		args2._id = newSchedule._id
		expect(newSchedule.name).toEqual(args1.name)

		const updatedSchedule = await Schedule.updateSchedule(null, args2)
		expect(updatedSchedule.location.name).toEqual(location2.name)
		expect(updatedSchedule.spacesTotal).toEqual(args2.spacesTotal)
	})

	it('should deleteSchedule', async () => {
		const args1 = {
			date: new Date(),
			duration: '45 minutes',
			spacesTotal: 25,
			instructor: instructor._id,
			fitnessClass: fitnessClass._id,
			location: location._id
		}

		const newSchedule = await Schedule.createSchedule(null, args1)

		const allSchedules = await Schedule.getSchedules()
		expect(allSchedules.length).toEqual(1)

		await Schedule.deleteSchedule(null, { _id: newSchedule._id })

		const schedulesAfterDelete = await Schedule.getSchedules()
		expect(schedulesAfterDelete.length).toEqual(0)
	})
})
