import React from "react"
import TimelineEventCard from "../Event/TimelineEventCard"
import { Fab, Grid } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
/**
 * This is the EventCard that has no images and will be used on the event timeline and the map
 * DEVELOP:
 */

interface Props {
  events: string[]
  openNewEvent: () => void
}

const TimelineSidebar: React.FC<Props> = ({ events, openNewEvent }) => {
  return (
    <Grid item xs={8}>
      <h2>Your events</h2>
      {events.map((text) => (
        <TimelineEventCard text={text} key={text} />
      ))}
      <Fab color="primary" aria-label="add" onClick={() => openNewEvent()}>
        <AddIcon />
      </Fab>
    </Grid>
  )
}

export default TimelineSidebar