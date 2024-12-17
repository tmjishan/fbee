import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
const AboutMe =()=>{
    return(
        <Layout pageTitle={'About'}>
            <h3>This is about page that i can use </h3>
        <StaticImage
        alt="seed"
        src="../image/seed.jpg"
        width={500}
        />
        </Layout>
    )
}

export const Head = ()=> <title>About Me</title>
export default AboutMe