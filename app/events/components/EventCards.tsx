import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

const ITEMS_PER_PAGE = 100;

const EventCardsContainer: React.FC<any> = (props) => {
  const classes = useStyles()
  // TODO: this relies on the category, need to double check after merge that it still works
  // const [categoryId, setCategoryId] = useState(0)
  const renderCards = () => {
    let filteredEvents;
    props.category ? filteredEvents = props.events.filter(event => event.category === props.category) : filteredEvents = props.events

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


          <DetailedEventCard event={event} />
        </Grid>
      )
    }))
  }

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Button
        data-id={category.name}
        onClick={(e) => {
          setCategoryId(e.currentTarget.getAttribute("data-id"))
        }}
        >
          {category.name}
        </Button>
      )
    })
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div style={{ width: "1100px" }}>
        {/* <Button onClick={() => setCategoryId(0)}>All</Button> */}
        {/* {renderCategories()} */}
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



let categories: Array<object> = [
  { name: "Mindfulness", id: 1 },
  { name: "Spiritual", id: 2 },
  { name: "Focused", id: 3 },
  { name: "Movement", id: 4 },
  { name: "Mantra", id: 5 },
  { name: "Zen", id: 6 } ,
  { name: "Kundalini", id: 7 }
]