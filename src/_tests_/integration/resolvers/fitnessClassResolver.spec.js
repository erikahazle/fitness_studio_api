import FitnessClass from '../../../graphql/resolvers/fitnessClassResolver'
import { setupTest } from '../setup'

describe('FitnessClassResolver', () => {
	beforeEach(async () => setupTest())

	it('should create a fitness class', async () => {
		const args = {name: 'hello', description: 'test1'}
		const newClass = await FitnessClass.createFitnessClass(null, args)
		expect(newClass._id).toBeTruthy()
		expect(newClass.name).toEqual(args.name)
		expect(newClass.description).toEqual(args.description)
	})

	it('should not create a fitness class when name is not provided', async () => {
		const args = {name: 'test1'}
		const newClass = await FitnessClass.createFitnessClass(null, args)
		expect(newClass._id).toBeTruthy()
		const sameNameClass = await FitnessClass
			.createFitnessClass(null, args)
			.catch(e => {
				expect(e).toBeTruthy()
			})
	})

	it('should getFitnessClasses', async () => {
		const args1 = {name: 'hello1', description: 'test1'}
		const args2 = {name: 'hello2', description: 'test2'}
		await FitnessClass.createFitnessClass(null, args1)
		await FitnessClass.createFitnessClass(null, args2)

		const allFitnessClasses = await FitnessClass.getFitnessClasses()
		expect(allFitnessClasses.length).toEqual(2)
	})

	it('should updateFitnessClass', async () => {
		const args1 = {name: 'hello1', description: 'test1'}
		const args2 = {name: 'hello2', description: 'test2'}

		const newClass = await FitnessClass.createFitnessClass(null, args1)
		args2._id = newClass._id
		expect(newClass.name).toEqual(args1.name)

		const updatedClass = await FitnessClass.updateFitnessClass(null, args2)
		expect(updatedClass.name).toEqual(args2.name)
		expect(updatedClass.description).toEqual(args2.description)
	})

	it('should deleteFitnessClass', async () => {
		const args1 = {name: 'hello1', description: 'test1'}
		const newFitnessClass = await FitnessClass.createFitnessClass(null, args1)

		const allFitnessClasses = await FitnessClass.getFitnessClasses()
		expect(allFitnessClasses.length).toEqual(1)

		await FitnessClass.deleteFitnessClass(null, { _id: newFitnessClass._id })

		const classesAfterDelete = await FitnessClass.getFitnessClasses()
		expect(classesAfterDelete.length).toEqual(0)
	})
})
