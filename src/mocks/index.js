import faker from 'faker'

import FitnessClass from '../models/FitnessClass'

const CLASSES_TOTAL = 10

export default async () => {
  try {
    await FitnessClass.remove()

    await Array.from({ length: CLASSES_TOTAL }).forEach(async () => {
      const newClass = await FitnessClass.create({
        name: faker.lorem.words(1),
        description: faker.lorem.sentence(1),
      })
    })
  } catch (error) {
    throw error
  }
}
