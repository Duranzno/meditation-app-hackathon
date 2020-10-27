import { EventDurationStep } from "app/constants"
import * as z from "zod"

export const EventInput = z.object({
  name: z.string().min(2),
  title: z.string().min(2),
  description: z.string().min(2),
  date: z.string(),
  time: z.string(),
  duration: z.number(),
  online: z.boolean(),
})
export type EventInputType = z.infer<typeof EventInput>
export const EventInputDefault: EventInputType = ({
  name: '',
  title: '',
  description: '',
  time: "" + new Date(),
  date: "" + new Date(),
  duration: EventDurationStep,
  online: true,
})
