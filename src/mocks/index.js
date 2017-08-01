import faker from 'faker'

import FitnessClass from '../models/FitnessClass'
import LocationClass from '../models/LocationClass'

const CLASSES_TOTAL = 10

export default async () => {
  try {
    await FitnessClass.remove()
    await LocationClass.remove()

    await Array.from({ length: CLASSES_TOTAL }).forEach(async () => {
      await FitnessClass.create({
        name: faker.lorem.words(1),
        description: faker.lorem.sentence(1),
      })

      await LocationClass.create({
        name: faker.lorem.words(1),
        address: faker.lorem.sentence(2),
      })
    })
  } catch (error) {
    throw error
  }
}
