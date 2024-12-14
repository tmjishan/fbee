import * as React from "react"
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout pageTitle={'Master'}>
      <h3>This is Home Page </h3>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Master Page</title>
