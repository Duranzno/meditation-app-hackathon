import Response from "@sendgrid/helpers/classes/response";
import sgMail from "@sendgrid/mail"
const { SENDGRID_API_KEY: api, SENDGRID_FROM_MAIL: fromMail } = process.env;
export const sendMail = async ({ mail, message }: { mail: string, message: string }): Promise<Response> => {
    const sandboxMode = process.env.NODE_ENV !== 'production'
    try {
        if (api && fromMail) {
            sgMail.setApiKey(api)
            const content: sgMail.MailDataRequired = {
                to: mail,
                // from: email,
                from: { email: fromMail },
                mailSettings: { sandboxMode: { enable: sandboxMode } },
                subject: `New Message From - ${fromMail}`,
                text: message,
                html: `<p>${message}</p>`
            }
            const [response] = await sgMail.send(content)
            return response
        } else {
            throw new Error(`The sendgrid api  key ${api} or the from mail ${fromMail} has not been set in the environment variables`);
        }
    } catch (error) {
        return error
    }
}