import { Ctx } from "blitz"
import db, { FindManyEventArgs } from "db"

type GetEventsInput = Pick<FindManyEventArgs, "where" | "orderBy" | "skip" | "take">

export default async function getEvents(
  { where, orderBy, skip = 0, take }: GetEventsInput,
  ctx: Ctx
) {
  // TODO:  getEvents occasionally receives ctx with null session || unconditional ctx.session.authorize breaks events/index
  // This is a security issue, but also annoying that we need ctx.session.authorize for a global
  // public events page. Not really sure what bypassing ctx.session.authorize does at the middleware
  // level, but I know this conditional statement needs to go away before anyone thinks the word 'production'
  if (ctx && ctx.session) {
    ctx.session.authorize()
  }

  const events = await db.event.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.event.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    events,
    nextPage,
    hasMore,
    count,
  }
}
