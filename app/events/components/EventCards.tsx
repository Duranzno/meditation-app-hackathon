import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import faker from 'faker';
import DetailedEventCard from '../../components/Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';





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

  const renderCards = () => {
    let filteredEvents;

    categoryId ?  filteredEvents = events.filter(event => event.data.Category.connect.id === parseInt(categoryId)) : filteredEvents = events

    return (filteredEvents.map((event: {
      data: object;
    }, i) => {
      return (
        <Grid 
        item 
        xs={3}                 
        justify="center"
        direction="row"
        alignItems="flex-start" 
        key={i}>

          
          <DetailedEventCard event={event.data} />
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


let events: Array<object> = []
for (let i = 0; i < 10; i++) {
  let event = {
    data: {
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
  events.push(event)
  }

  let categories = [
    {data: {name: "Mindfulness", id: 1}},
    {data: {name: "Spiritual", id: 2}},
    {data: {name: "Focused", id: 3}},
    {data: {name: "Movement", id: 4}},
    {data: {name: "Mantra", id: 5}}
  ]