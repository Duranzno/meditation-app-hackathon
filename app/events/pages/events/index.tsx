import React, { useState, Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, useQuery } from "blitz"
import getEvents from "app/events/queries/getEvents"
import EventCards from "app/events/components/EventCards"
import { Button } from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer"
import NewEventSidebar from "app/components/Sidebar/NewEventSidebar"

const ITEMS_PER_PAGE = 100

// export const EventsList = () => {
//   const router = useRouter()
//   const page = Number(router.query.page) || 0
//   const [{ events, hasMore }] = usePaginatedQuery(getEvents, {
//     orderBy: { id: "asc" },
//     skip: ITEMS_PER_PAGE * page,
//     take: ITEMS_PER_PAGE,
//   })
//   const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
//   const goToNextPage = () => router.push({ query: { page: page + 1 } })

//   return (
//     <div>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <Link href="/events/[eventId]" as={`/events/${event.id}`}>
//               <a>{event.name}</a>
//             </Link>
//             <div></div>
//             <Link href='/events/[eventId]/room' as={`/events/${event.id}/room`}>
//               <a>Join Session</a>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button disabled={page === 0} onClick={goToPreviousPage}>
//         Previous
//       </button>
//       <button disabled={!hasMore} onClick={goToNextPage}>
//         Next
//       </button>
//     </div>
//   )
// }

const EventsPage: BlitzPage = (props) => {
  const [openRSidebar, setOpenRSidebar] = useState(false);
  const data = JSON.parse(props.data)
  console.log(data.events[0].id)
  return (
    <div>
      <p>
        <Button onClick={() => setOpenRSidebar(true)}>
          <a>Create Event</a>
        </Button>

        <NewEventSidebar open={openRSidebar} onClose={() => setOpenRSidebar(false)} />
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <EventCards events={data.events} />
      </Suspense>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  // SSR was the only way I could get this query to work. Using useQuery in the component cause 
  // Suspense issues. moving the hook to EventCards broke everything. This will have to do for now.
  let events = await getEvents({}, ctx);
  let data = JSON.stringify(events) // this string/parse process is because of a bug in blitz' SSR 
  console.log(data);
  return { props: { data } }
}

EventsPage.getLayout = (page) => <Layout title={"Events"}>{page}</Layout>

export default EventsPage
