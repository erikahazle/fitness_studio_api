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
})
