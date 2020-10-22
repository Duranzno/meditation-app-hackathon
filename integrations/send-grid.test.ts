import { sendMail } from './send-grid';
jest.setTimeout(10000)
test('Send Mail', async () => {
    const emailData = {
        mail: "aledurax@gmail.com",
        message: "paragraph sdasd",
    }
    // try {
    const p = await sendMail(emailData)
    console.log(p)
    expect(p).toBeDefined()
    expect(p.statusCode).toBeDefined()
    expect(p.statusCode).toBeGreaterThan(200)
    expect(p.statusCode).toBeLessThan(300)
    // console.log(p)
    expect(true).toBeTruthy()
    // } catch (error) {
    //     expect(error).toBe(undefined)
    // }
});