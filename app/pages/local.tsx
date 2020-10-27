import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import HereMap from 'app/components/Map'
import { DisplayMapFC } from "app/components/Map/DisplayMap"
/*
 * This will be the page that shows events near the user.
 * DEVELOP:
 */

const Local: BlitzPage = () => {
  return (
    <div>
      <HereMap />
    </div>
  )
}

Local.getLayout = (page) => <Layout title="Local Events">{page}</Layout>

export default Local
