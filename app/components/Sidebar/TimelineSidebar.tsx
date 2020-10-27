import React from "react"
import TimelineEventCard from "../Event/TimelineEventCard"
import { Fab, Grid, makeStyles, Typography } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
/**
 * This is the EventCard that has no images and will be used on the event timeline and the map
 * DEVELOP:
 */

interface Props {
  events: string[]
  openNewEvent: () => void
}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5) + 'px !important',
    paddingBottom: theme.spacing(5) + 'px !important',
    height: "100%",
    flex: 1
  },
  title: {
    paddingTop: theme.spacing(5),
    fontWeight: "bold"
  },
  events: {},
  fab: {
    justifySelf: "end",
    alignSelf: "end"
  }
}))
const TimelineSidebar: React.FC<Props> = ({ events, openNewEvent }) => {
  const classes = useStyles()
  return (
    <Grid item xs={8} className={classes.root} container direction="column" spacing={2} justify="space-between">


      <Typography className={classes.title} variant="h4" component="h4">Your events</Typography>
      <Grid item container direction="column" spacing={2} className={classes.events}>
        {events.map((text) => (
          <TimelineEventCard text={text} key={text} />
        ))}
      </Grid>

      <Fab className={classes.fab} color="primary" aria-label="add" onClick={() => openNewEvent()}>
        <AddIcon />
      </Fab>
    </Grid>
  )
}

export default TimelineSidebar
