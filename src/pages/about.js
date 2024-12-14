import * as React from "react"
import Layout from "../components/layout"

const AboutMe =()=>{
    return(
        <Layout pageTitle={'About'}>
            <h3>This is about page that i can use </h3>
        </Layout>
    )
}

export const Head = ()=> <title>About Me</title>
export default AboutMe