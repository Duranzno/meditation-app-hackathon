import db from "./index"
import faker from "faker";

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */


/*
* Can't seed with faker but 
 * Can't seed with faker but 
* Can't seed with faker but 
*
* `yarn blitz c` will enter the console and allow manual modification of db records
* 
 * 
* 
* db is working 
 * db is working 
* db is working 
*/

const seed = async () => {
  const categoryNames = ["Mindfulness", "Spiritual", "Focused", "Movement", "Mantra"]
  const categories = await Promise.all(categoryNames.map((name) => db.category.create({ data: { name } })))
  for (let i = 0; i < 10; i++) {
    const categoryId = categories[faker.random.number({ min: 0, max: categories.length })].id
    console.log(categoryId)
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

  // for (let i = 0; i < 20; i++) {
  //   await db.user.create({
  //     data: {
  //       name: faker.name.findName(),
  //       email: faker.internet.email(),
  //       hashedPassword: faker.internet.password()
  //     },
  //   })
  // }


}

export default seed;

