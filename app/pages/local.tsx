import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"

/*
 * This will be the page that shows events near the user.
 * DEVELOP:
*/

const Local: BlitzPage = () => {
    return (
        <div>
            LocalPage
        </div>

    )
}

Local.getLayout = (page) => <Layout title="Local Events" >{page}</Layout>

export default Local
