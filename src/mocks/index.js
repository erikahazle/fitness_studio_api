import faker from 'faker'

import FitnessClass from '../models/FitnessClass'
import Location from '../models/Location'
import Instructor from '../models/Instructor'

const CLASSES_TOTAL = 10

export default async () => {
  try {
    await FitnessClass.remove()
    await Location.remove()

    await Array.from({ length: CLASSES_TOTAL }).forEach(async () => {
      await FitnessClass.create({
        name: faker.lorem.words(1),
        description: faker.lorem.sentence(1),
      })

      await Location.create({
        name: faker.lorem.words(1),
        address: faker.lorem.sentence(2),
      })

      await Instructor.create({
        name: faker.lorem.words(1),
        bio: faker.lorem.sentence(5),
      })
    })
  } catch (error) {
    throw error
  }
}
