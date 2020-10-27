import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"

const Categories: BlitzPage = () => {
  return (
    <div>
      categories
    </div>
  )
}

Categories.getLayout = (page) => <Layout title="Types of Meditation">{page}</Layout>

export default Categories
