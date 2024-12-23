import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle={'Master'}>
      <h3>This is Home Page </h3>
      <StaticImage 
        alt="Plant"
        src="https://selfsustainingecosystem.com/wp-content/uploads/2018/09/noth-garden-blog-terrarium-la-gi-lich-su-terrarium-1.jpg"
        width={500}
        height={300}
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Master Page" />
