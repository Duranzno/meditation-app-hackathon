import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import faker from 'faker';
import DetailedEventCard from '../../components/Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useQuery } from 'blitz';
import getEvents from '../queries/getEvents';





const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

const EventCardsContainer: React.FC<Props> = () => {
  const classes = useStyles()

  const [categoryId, setCategoryId] = useState(0)

  const [events] = useQuery(getEvents, {orderBy: {datetime: 'asc'}})

  const renderCards = () => {

    let filteredEvents = [];
    categoryId ?  filteredEvents = mockEvents.filter(event => event.data.Category.connect.id === parseInt(categoryId)) : filteredEvents = mockEvents

    return (events.events.map((event: object, i) => {
      return (
        <Grid 
        item 
        xs={3}                 
        justify="center"
        direction="row"
        alignItems="flex-start" 
        key={i}>
          
          
          <DetailedEventCard event={event} />
        </Grid>
      )
    }))
  }

  const renderCategories = () => {
    return categories.map((category) => {
      return (
          <Button 
          data-id={category.data.id} 
          onClick={(e) => {
          setCategoryId(e.currentTarget.getAttribute("data-id"))
          }}
          >
          {category.data.name}
          </Button>
      )})
  } 

  return (
    <main className={classes.content}>
      {console.log(events)}
      <div className={classes.toolbar} />
        <div style={{ width: "1100px"}}>
          <Button onClick={() => setCategoryId(0)}>All</Button>
          {renderCategories()}
          <br></br>
          <br></br>
          <Grid 
          container 
          item 
          direction="row" 
          alignItems="flex-start" 
          xs={12} 
          spacing={3}
          >
            {renderCards()}
          </Grid>
        </div>
    </main>
  )
}

export default EventCardsContainer


let mockEvents: Array<object> = []
for (let i = 0; i < 10; i++) {
  let event = {
    data: {
      id: i+1,
      name: `${faker.date.weekday()} Meditation`, 
      title: `Peaceful Meditation`, 
      description: faker.random.words(), 
      datetime: faker.date.future(), 
      duration: Math.floor(Math.random() * (9 - 3) + 3), 
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
  }
  mockEvents.push(event)
  }

  let categories: Array<object>  = [
    {data: {name: "Mindfulness", id: 1}},
    {data: {name: "Spiritual", id: 2}},
    {data: {name: "Focused", id: 3}},
    {data: {name: "Movement", id: 4}},
    {data: {name: "Mantra", id: 5}}
  ]

  const user ={ data:  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    hashedPassword: faker.internet.password()
  }}