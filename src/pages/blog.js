import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


const Blog = ({data}) => {
    return (
        <Layout pageTitle="My Blog Page">
            <h3>{data.allFile.nodes.map(node=>(
                <li key={node.name}>{node.name}</li>
            ))}</h3>
            <StaticImage
                src="https://images.unsplash.com/photo-1649335811210-67ee1f05e962?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
                width={500}
                height={300}
            />

        </Layout>
    )
}

export const query = graphql`
query{
    allFile(filter: {sourceInstanceName: {eq: "blog"}}){
        nodes{
            name
        }
    }
}
`

export default Blog
export const Head = () => <Seo title={"My Blog Page"} /> 
