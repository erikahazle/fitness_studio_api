import User from '../../../graphql/resolvers/userResolver'
import UserModel from '../../../models/User'
import { setupTest } from '../setup'

describe('UserResolver', () => {
	beforeEach(async () => setupTest())

	it('should allow a user to sign up and return a token', async () => {
		const args = {email: 'test@test.com', fullName: 'Test Testy', password: 'testing'}
		const newUser = await User.signup(null, args)
		expect(newUser.token).toBeTruthy()
	})

	it('should not sign up a user without a password', async () => {
		const args = {email: 'test@test.com', fullName: 'Test Testy'}
		let newUser
		try {
			newUser = await User.signup(null, args)
		} catch (err) {
			expect(err.errors.password).toBeTruthy()
		}
		expect(newUser).toBeUndefined()
	})

	it('should not sign up a user without a fullName', async () => {
		const args = {email: 'test@test.com', password: 'testing'}
		let newUser
		try {
			newUser = await User.signup(null, args)
		} catch (err) {
			expect(err).toBeTruthy()
		}
		expect(newUser).toBeUndefined()
	})

	it('should not sign up a user without a email', async () => {
		const args = {fullName: 'Test Testy', password: 'testing'}
		let newUser
		try {
			newUser = await User.signup(null, args)
		} catch (err) {
			expect(err.errors.email).toBeTruthy()
		}
		expect(newUser).toBeUndefined()
	})

	it('should only sign up users with unique emails', async () => {
		const args = {fullName: 'Test Testy', email: 'test@test.com', password: 'testing'}
		const firstUser = await User.signup(null, args)
		expect(firstUser.token).toBeTruthy()

		let newUser
		try {
			newUser = await User.signup(null, args)
		} catch (err) {
			expect(err).toBeTruthy()
		}
		expect(newUser).toBeUndefined()
	})
})
