import db from "./index"
import faker from "faker";
import { Category } from "@material-ui/icons";

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */


/*
*
* 
 * 
* 
* db is working 
 * db is working 
* db is working 
*/


// to see data in web app run in the terminal:
//  `yarn blitz db seed`

// if seed is taking too long press ctrl + c  it should get unstuck and finish seeding

// to reset db:
// delete db/migrations folder
// delete db.sqlite
// run in the terminal:
//  `yarn blitz db seed`

//  `yarn blitz c` will enter the console and allow manual modification of db records


const seed = async () => {
  const categoryNames = ["Mindfulness", "Spiritual", "Focused", "Movement", "Mantra", "Zen", "Kundalini"]

  const categories = await Promise.all(categoryNames.map((name) => db.category.create({ data: { name } })))
  await db.user.create({
    data: {
      name: faker.name.findName(),
      email: faker.internet.email(),
      hashedPassword: faker.internet.password()
    },
  })
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let i = 0; i < categories.length; i++) {
    const id = categories[i].id;

    const date = faker.date.future()
    await db.event.create(
      {
        data: {
          name: `${days[date.getDay()]}'s Meditation`,
          title: `Satsang Meditation`,
          description: `Session from the city of ${faker.address.city()}`,
          datetime: date,
          duration: Math.floor(Math.random() * (9 - 3) + 3),
          online: faker.random.boolean(),
          location: faker.address.city(),
          Category: {
            connect: {
              id,
            },
          },
        },
      })
  }
}

export default seed;

