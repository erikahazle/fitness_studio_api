import Instructor from '../../../graphql/resolvers/instructorResolver'
import { setupTest } from '../setup'

describe('InstructorResolver', () => {
	beforeEach(async () => setupTest())

	it('should create an instructor', async () => {
		const args = {name: 'name1', bio: 'test1'}
		const newInstructor = await Instructor.createInstructor(null, args)
		expect(newInstructor._id).toBeTruthy()
		expect(newInstructor.name).toEqual(args.name)
		expect(newInstructor.bio).toEqual(args.bio)
	})

	it('should not create an instructor when name is not unique', async () => {
		const args = {name: 'test1'}
		const newInstructor = await Instructor.createInstructor(null, args)
		expect(newInstructor._id).toBeTruthy()
		const sameNameInstructor = await Instructor
			.createInstructor(null, args)
			.catch(e => {
				expect(e).toBeTruthy()
			})
	})

	it('should getInstructors', async () => {
		const args1 = {name: 'hello1', bio: 'test1'}
		const args2 = {name: 'hello2', bio: 'test2'}
		await Instructor.createInstructor(null, args1)
		await Instructor.createInstructor(null, args2)

		const allInstructores = await Instructor.getInstructors()
		expect(allInstructores.length).toEqual(2)
	})

	it('should updateInstructor', async () => {
		const args1 = {name: 'hello1', bio: 'test1'}
		const args2 = {name: 'hello2', bio: 'test2'}

		const newInstructor = await Instructor.createInstructor(null, args1)
		args2._id = newInstructor._id
		expect(newInstructor.name).toEqual(args1.name)

		const updatedInstructor = await Instructor.updateInstructor(null, args2)
		expect(updatedInstructor.name).toEqual(args2.name)
		expect(updatedInstructor.bio).toEqual(args2.bio)
	})

	it('should deleteInstructor', async () => {
		const args1 = {name: 'hello1', bio: 'test1'}
		const newInstructor = await Instructor.createInstructor(null, args1)

		const allInstructors = await Instructor.getInstructors()
		expect(allInstructors.length).toEqual(1)

		await Instructor.deleteInstructor(null, { _id: newInstructor._id })

		const classesAfterDelete = await Instructor.getInstructors()
		expect(classesAfterDelete.length).toEqual(0)
	})
})
