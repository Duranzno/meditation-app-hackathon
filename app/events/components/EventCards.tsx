import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DetailedEventCard from '../../components/Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';
import { Button, Input } from '@material-ui/core';

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
  const [category, setCategory] = useState('')
  // console.log(category)
  const renderCards = () => {
    let filteredEvents = props.events

    filteredEvents = props.events.filter(event => event.category.includes(category))

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
          {console.log(event.category)}
        </Grid>
      )
    }))
  }

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Button
        data-name={category.name}
        onClick={(e) => {
          setCategory(e.currentTarget.getAttribute("data-name"))
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
        <Button onClick={() => setCategory('')}>All</Button>
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




const categoryNames = ["Mindfulness", "Spiritual", "Focused", "Yoga", "Mantra", "Zen", "Kundalini"]

const categories = categoryNames.map((name, i) => { return { name: name, id: i } })