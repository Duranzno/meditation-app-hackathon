import Response from "@sendgrid/helpers/classes/response";
import sgMail from "@sendgrid/mail"
import { geoplaceCreator, linkCreator } from "app/utils/linkCreator"

const { SENDGRID_API_KEY: api, SENDGRID_FROM_MAIL: fromMail } = process.env;
type sendMailProps = {
    mails: string[];
    message: string;
};

export const sendMail = async ({ mails, message }: sendMailProps): Promise<Response> => {
    const sandboxMode = process.env.NODE_ENV !== 'production'
    try {
        if (api && fromMail) {
            sgMail.setApiKey(api)
            const content: sgMail.MailDataRequired = {
                to: mails,
                // from: email,
                from: { email: fromMail },
                mailSettings: { sandboxMode: { enable: sandboxMode } },
                subject: `New Message From - ${fromMail}`,
                text: message,
                html: `<p>${message}</p>`
            }
            const [response] = await sgMail.send(content)
            console.log(response)
            return response
        } else {
            throw new Error(`The sendgrid api  key ${api} or the from mail ${fromMail} has not been set in the environment variables`);
        }
    } catch (error) {
        return error
    }
}

export const sendReminderFor = async (event: object, mails: string[]) => {
    //@ts-ignore
    const message = `Hey, ${User.name} from Satsung we want to remind you that you have a new meditation event on ${new Date(event.datetime)} available at ${event.online ? linkCreator(event.id) : geoplaceCreator(event.location?.lat, event.location?.lng)}`
    console.log(message)
    await sendMail({ mails, message })
}