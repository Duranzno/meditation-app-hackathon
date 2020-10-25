import getEvents from 'app/events/queries/getEvents';
import { useQuery, useSession } from "blitz"
import { useCurrentUser } from 'app/hooks/useCurrentUser';
import db from "db"

// Events are now related to the User that creates them
// this Hook should grab the complete array of Events belonging to a user
// TODO: debug, i don't think this is really working because of something to do with prisma fluent 
// queries and the way that the BlitzPageComponent works...
export const useOwnedEvents = () => {
  const session = useSession()
  const events = useQuery(getEvents, { where: { userId: session.userId } })
  return events;
}