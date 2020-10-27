import { getSessionContext } from "@blitzjs/server"
import db from "db"
import { sendReminderFor } from "integrations/send-grid"

const cronMailEndpoint = async (req, res) => {
	const session = await getSessionContext(req, res)
	const events = await db.event.findMany({ orderBy: [{ datetime: "desc" }], include: { User: true, location: true } })
	events.forEach(async (event) => {
		const emails = event.User?.email ? [event.User?.email] : []

		if (emails.length > 0) {
			console.log(event.User)
			await sendReminderFor(event, emails)
		}
	})
	console.log("User ID:", session.userId)
	res.statusCode = 200
	res.setHeader("Content-Type", "application/json")
	res.end(JSON.stringify({ events }))
}
export default cronMailEndpoint