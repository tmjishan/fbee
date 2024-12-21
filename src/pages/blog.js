import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Blog = ()=>{
    return(
        <Layout pageTitle="My Blog Page">
            <p>My Page Is Show Here</p>
        </Layout>
    )
}

export default Blog
export const Head =()=> <Seo title = {"My Blog Page"} /> 
