import React, { Suspense } from "react"
import OldEventForm from "app/events/components/OldEventForm"
import Drawer from "@material-ui/core/Drawer"
import EventForm from '../../events/components/EventForm'
import createEvent from "app/events/mutations/createEvent"
import { useMutation, useRouter } from 'blitz';
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
  const [createEventMutation] = useMutation(createEvent);
  const router = useRouter();

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
          <OldEventForm initialValues={newEventValues} onSubmit={async evt => {
            try {
              // TODO: properly type this mutation...
              console.log("HERE")
              console.log(evt)
              const event = await createEventMutation({
                data: {
                  name: evt.name,
                  title: evt.title,
                  description: evt.description,
                  datetime: new Date(evt.datetime),
                  duration: parseInt(evt.duration),
                  online: evt.online,
                  location: evt.location ? evt.location : "",
                }
              })
              alert("Success!" + JSON.stringify(event))
              router.push("/events/[eventId]", `/events/${event.id}`)
            } catch (error) {
              alert("Error creating event " + JSON.stringify(error, null, 2))
            }
          }} />
        </Drawer>
      </Suspense>
    </div>
  )
}

export default NewEventSidebar