import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getEvent from "app/events/queries/getEvent"
import deleteEvent from "app/events/mutations/deleteEvent"

// TODO: eliminate individual event page in favor of event modal on events index page
// TODO: make corrections from scaffolded pseudo-model to actual prisma schema

export const Event = () => {
  const router = useRouter()
  //const eventId = useParam("id", "string") // TODO: debug useParam hook --- this fails to return the corresponding event from the database

  // TODO: evaluate this implementation - since the URL includes the eventID to render this page,
  // I used the next/router (blitz router?) to get the path and split off the event ID for the query
  // feels hacky, but it works.
  const newId = router.asPath.split("/events/")[1]
  const [event] = useQuery(getEvent, { where: { id: newId } })
  const [deleteEventMutation] = useMutation(deleteEvent)

  return (
    <div>
      <h1>Event {event.id}</h1>
      <pre>{JSON.stringify(event, null, 2)}</pre>

      <Link href="/events/[eventId]/edit" as={`/events/${event.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteEventMutation({ where: { id: event.id } })
            router.push("/events")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowEventPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/events">
          <a>Events</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Event />
      </Suspense>
    </div>
  )
}

ShowEventPage.getLayout = (page) => <Layout title={"Event"}>{page}</Layout>

export default ShowEventPage
