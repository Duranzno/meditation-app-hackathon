import React from "react"
import TimelineEventCard from "../Event/TimelineEventCard"
import { Fab, Grid } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import { useCurrentUser } from "app/hooks/useCurrentUser"
/**
 * This is the EventCard that has no images and will be used on the event timeline and the map
 * DEVELOP:
 */

interface Props {
  events: string[]
  openNewEvent: () => void
}

const TimelineSidebar: React.FC<Props> = ({ events, openNewEvent }) => {
  const currentUser = useCurrentUser() 
  const joinedEvents = currentUser?.Event
  return (
    <Grid item xs={8}>
      <h2>Your events</h2>
      {currentUser ? 
      joinedEvents.map((event) => (
        <TimelineEventCard title={event.name} key={event.id} />
      )) :
      "Loading"
      }
      <Fab color="primary" aria-label="add" onClick={() => openNewEvent()}>
        <AddIcon />
      </Fab>
    </Grid>
  )
}

export default TimelineSidebar
