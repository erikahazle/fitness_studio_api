import Location from '../../../graphql/resolvers/locationResolver'
import { setupTest } from '../setup'

describe('LocationResolver', () => {
	beforeEach(async () => setupTest())

	it('should create an Location', async () => {
		const args = {name: 'name1', address: 'test1'}
		const newLocation = await Location.createLocation(null, args)
		expect(newLocation._id).toBeTruthy()
		expect(newLocation.name).toEqual(args.name)
		expect(newLocation.address).toEqual(args.address)
	})

	it('should not create an Location when name is not unique', async () => {
		const args = {name: 'test1'}
		const newLocation = await Location.createLocation(null, args)
		expect(newLocation._id).toBeTruthy()
		const sameNameLocation = await Location
			.createLocation(null, args)
			.catch(e => {
				expect(e).toBeTruthy()
			})
	})

	it('should getLocations', async () => {
		const args1 = {name: 'hello1', address: 'test1'}
		const args2 = {name: 'hello2', address: 'test2'}
		await Location.createLocation(null, args1)
		await Location.createLocation(null, args2)

		const allLocationes = await Location.getLocations()
		expect(allLocationes.length).toEqual(2)
	})

	it('should updateLocation', async () => {
		const args1 = {name: 'hello1', address: 'test1'}
		const args2 = {name: 'hello2', address: 'test2'}

		const newLocation = await Location.createLocation(null, args1)
		args2._id = newLocation._id
		expect(newLocation.name).toEqual(args1.name)

		const updatedLocation = await Location.updateLocation(null, args2)
		expect(updatedLocation.name).toEqual(args2.name)
		expect(updatedLocation.address).toEqual(args2.address)
	})

	it('should deleteLocation', async () => {
		const args1 = {name: 'hello1', address: 'test1'}
		const newLocation = await Location.createLocation(null, args1)

		const allLocations = await Location.getLocations()
		expect(allLocations.length).toEqual(1)

		await Location.deleteLocation(null, { _id: newLocation._id })

		const classesAfterDelete = await Location.getLocations()
		expect(classesAfterDelete.length).toEqual(0)
	})
})
