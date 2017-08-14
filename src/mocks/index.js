import faker from 'faker'

import FitnessClass from '../models/FitnessClass'
import Location from '../models/Location'
import Instructor from '../models/Instructor'
import Schedule from '../models/Schedule'

const CLASSES_TOTAL = 10

export default async () => {
  try {
    await FitnessClass.remove()
    await Location.remove()
    await Instructor.remove()
    await Schedule.remove()

    await Array.from({ length: CLASSES_TOTAL }).forEach(async () => {
      const fitnesClass = await FitnessClass.create({
        name: faker.lorem.words(1),
        description: faker.lorem.sentence(1),
      })

      const location = await Location.create({
        name: faker.lorem.words(1),
        address: faker.lorem.sentence(2),
      })

      const instructor = await Instructor.create({
        name: faker.lorem.words(1),
        bio: faker.lorem.sentence(5),
      })

      const newSchedule = {
        date: new Date(),
        duration: '45 minutes',
        instructor: instructor._id,
        location: location._id,
        fitnesClass: fitnesClass._id,
        spacesTotal: 20
      }

      console.log('newSchedule', newSchedule)

      await Schedule.create(newSchedule)
    })
  } catch (error) {
    throw error
  }
}
