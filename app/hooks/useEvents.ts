import getEvents from 'app/events/queries/getEvents';
import { useQuery, useSession } from "blitz"
import { useCurrentUser } from 'app/hooks/useCurrentUser';
import db from "db"

// Events are now related to the User that creates them
// this Hook should grab the complete array of Events belonging to a user
export const useOwnedEvents = () => {
  const session = useSession()
  console.log(session.userId);
  const events = useQuery(getEvents, { where: { userId: session.userId } })
  return events;
}

// export const getUserEvents = () => {
//   const session = useSession()
//   const events = a
// }

// export const useOwnedEventIds = () => {
//   const user = useCurrentUser()
//   if (user && user.id) {
//     const results = useQuery(getEvents, null, { where: { id: user.id } })
//     return results.map((e) => { return e.id })
//   }
//   return null;
// }