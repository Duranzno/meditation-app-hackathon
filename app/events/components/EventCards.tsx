import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import faker from 'faker';
import DetailedEventCard from '../../components/Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useQuery } from 'blitz';
import getEvents from '../queries/getEvents';
import getCategories from 'app/categories/queries/getCategories';





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
  const [categories] = useQuery(getCategories, {orderBy: {id: 'asc'}})

  const renderCards = () => {

    let filteredEvents;
    categoryId ?  filteredEvents = events[0].filter(event => event.data.Category.connect.id === parseInt(categoryId)) : filteredEvents = events

    return (filteredEvents.map((event: object, i) => {
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
    return categories[0].map((category) => {
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
          {console.log(categories)}
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