import { Ctx } from "blitz"
import db, { EventUpdateArgs } from "db"

type UpdateEventInput = Pick<EventUpdateArgs, "where" | "data">

export default async function updateEvent({ where, data }: UpdateEventInput, ctx: Ctx) {
  ctx.session.authorize()

  const event = await db.event.update({ where, data })

  return event
}
