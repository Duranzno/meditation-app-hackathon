import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getEvents from "app/events/queries/getEvents"

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
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href="/events/[eventId]" as={`/events/${event.id}`}>
              <a>{event.name}</a>
            </Link>
          </li>
        ))}
      </ul>

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
  return (
    <div>
      <p>
        <Link href="/events/new">
          <a>Create Event</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <EventsList />
      </Suspense>
    </div>
  )
}

EventsPage.getLayout = (page) => <Layout title={"Events"}>{page}</Layout>

export default EventsPage
