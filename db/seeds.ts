import db from "./index"
import faker from "faker";

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  const mindfulness = await db.category.create({data: {name: "Mindfulness"}})
  const spiritual = await db.category.create({data: {name: "Spiritual"}})
  const focused = await db.category.create({data: {name: "Focused"}})
  const movement = await db.category.create({data: {name: "Movement"}})
  const mantra = await db.category.create({data: {name: "Mantra"}})
    
  for (let i = 0; i < 10; i++) {
    await db.event.create({
      data: {
        name: `${faker.date.weekday()} Meditation`, 
        title: `Peaceful Meditation`, 
        description: faker.random.words(), 
        datetime: faker.date.future(), 
        duration: Math.floor(Math.random() * (90 - 30) + 30), 
        online: Math.random() >= 0.5, 
        location: faker.address.city(),
        Category: {
          connect: {
            id: Math.floor(Math.random() * (5 - 1) + 1),
          },
        },
        User: {
          connect: {
            id: Math.floor(Math.random() * (5 - 1) + 1),
          },
        },
      },
    })
  }
  
  
}

export default seed;

const event =  await db.event.create({data: {name: `Meditation`, title: `editation`, description: 'Peaceful', datetime: new Date(), duration: 30, online: true, location: "LA",Category: {connect: {id: 1,},},},})