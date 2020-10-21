import React from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createEvent from "app/events/mutations/createEvent"
import EventForm from "app/events/components/EventForm"

// TODO: migrate from events/new page to modal/sidebar components integrated with events index page
// TODO: figure out URL schema with Aashna for meetings

const URL = "localhost:3000/events/new"

const defaults = {
  "tags": ["meditation"],
  "name": "My Meditation Session",
  "title": "Focusing 8 Chakras",
  "description": "Align your 8 chakras so you can enter the Avatar State at will.",
  "datetime": "",
  "duration": 30,
  "online": true,
  "link": "localhost:3000/events"
}

const NewEventPage: BlitzPage = () => {
  const router = useRouter()
  const [createEventMutation] = useMutation(createEvent)

  return (
    <div>
      <h1>Create New Event</h1>

      <EventForm
        initialValues={defaults}
        onSubmit={async () => {
          try {
            const event = await createEventMutation({
              data: {
                name: defaults.name,
                title: defaults.title,
                description: defaults.description,
                datetime: defaults.datetime,
                duration: defaults.duration,
                online: defaults.online,
                location: "",
                link: `${URL}`
              }
            })
            alert("Success!" + JSON.stringify(event))
            router.push("/events/[eventId]", `/events/${event.id}`)
          } catch (error) {
            alert("Error creating event " + JSON.stringify(error, null, 2))
          }
        }}
      />
      <p>
        <Link href="/events">
          <a>Events</a>
        </Link>
      </p>
    </div>
  )
}
// could we eliminate this getLayout function by wrapping root _app component in <Layout/> ?
NewEventPage.getLayout = (page) => <Layout title={"Create New Event"}>{page}</Layout>

export default NewEventPage
