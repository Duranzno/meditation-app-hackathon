import { Ctx } from "blitz"
import db, { EventDeleteArgs } from "db"

type DeleteEventInput = Pick<EventDeleteArgs, "where">

export default async function deleteEvent({ where }: DeleteEventInput, ctx: Ctx) {
  ctx.session.authorize()

  const event = await db.event.delete({ where })

  return event
}
