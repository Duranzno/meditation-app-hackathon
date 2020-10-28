import React, { Suspense } from "react"
import Drawer from "@material-ui/core/Drawer"
import EventForm from '../../events/components/EventForm'
import createEvent from "app/events/mutations/createEvent"
import { useMutation } from 'blitz';
import { useCurrentUser } from "app/hooks/useCurrentUser";

/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */

interface Props {
  open: boolean
  onClose: Function
}




const NewEventSidebar: React.FC<Props> = ({ open, onClose }) => {

    const newEventValues = {
      name: 'Session Name', 
      title: 'Session Title', 
      description: 'Description', 
      datetime: new Date(),
      duration: '30',
      online: true, 
      location: 'LA',
      category: "Mindfulness"
    }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <EventForm newEventValues={newEventValues}/>
      </Drawer>
      </Suspense>
    </div>
  )
}

export default NewEventSidebar