import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home page" />
      <div className="container container--large">
        <h1>Index page</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
