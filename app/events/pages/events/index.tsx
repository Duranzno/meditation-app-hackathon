import React, { useState, Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getEvents from "app/events/queries/getEvents"
import EventCards from "app/events/components/EventCards"
import { Button } from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer"
import NewEventSidebar from "app/components/Sidebar/NewEventSidebar"

const ITEMS_PER_PAGE = 100
// TODO: migrate EventsList from an HTML-based unordered list to cards inline with the figma design


export const EventsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ events, hasMore }] = usePaginatedQuery(getEvents, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      {/* Cards would go here since it is the index view of the cards */}
      {/* {console.log("hello")} */}
      {/* this link can open a modal containing detailed view of event */}

      {/* <ul>


        {events.map((event) => (
          <li key={event.id}>
            <Link href="/events/[eventId]" as={`/events/${event.id}`}>
              <a>{event.name}</a>
            </Link>
          </li>
        ))}
      </ul> */}

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const EventsPage: BlitzPage = () => {
  const [openRSidebar, setOpenRSidebar] = useState(false);

  return (
    <div>
      <p>
        {/* This button opens right sidebar */}
        <Button onClick={() => setOpenRSidebar(true)}>
          <a>Create Event</a>
        </Button>

        <NewEventSidebar open={openRSidebar} onClose={() => setOpenRSidebar(false)} />
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <EventCards/>
        {/* <EventsList /> */}
      </Suspense>
    </div>
  )
}

EventsPage.getLayout = (page) => <Layout title={"Events"}>{page}</Layout>

export default EventsPage
