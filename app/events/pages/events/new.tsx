import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createEvent from "app/events/mutations/createEvent"
import EventForm from "app/events/components/EventForm"
import { useCurrentUser } from 'app/hooks/useCurrentUser'
// TODO: migrate from events/new page to modal/sidebar components integrated with events index page

const defaults = {
  "tags": ["meditation"],
  "name": "My Meditation Session",
  "title": "Focusing 8 Chakras",
  "description": "Align your 8 chakras so you can enter the Avatar State at will.",
  "datetime": "",
  "duration": 30,
  "online": true,
}

const NewEventPage: BlitzPage = () => {
  const router = useRouter()
  const [createEventMutation] = useMutation(createEvent)
  const user = useCurrentUser()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Create New Event</h1>

        <EventForm
          initialValues={defaults}
          onSubmit={async evt => {
            console.log(evt)
            try {
              const event = await createEventMutation({
                data: {
                  name: evt.name,
                  title: evt.title,
                  description: evt.description,
                  datetime: new Date(evt.datetime),
                  duration: evt.duration,
                  online: evt.online,
                  location: evt.location ? evt.location : "",
                  // User: user,
                  // userId: user?.id,
                  ownerId: user?.id,
                }
              })
              alert("Success!" + JSON.stringify(event))
              router.push("/events/[eventId]", `/events/${event.id}`)
            } catch (error) {
              alert("Error creating event " + JSON.stringify(error, null, 2) + JSON.stringify(user, null, 2))
            }
          }}
        />
        <p>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </p>
      </div>
    </Suspense>
  )
}
// could we eliminate this getLayout function by wrapping root _app component in <Layout/> ?
NewEventPage.getLayout = (page) => <Layout title={"Create New Event"}>{page}</Layout>

export default NewEventPage
