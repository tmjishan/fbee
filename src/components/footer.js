import * as React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import {ul} from './footer.module.css'

const Footer =()=>{

const data = useStaticQuery(graphql`
    query {
  site {
    port
    buildTime
    host
  }
}
    `)
    return(
        <div>
            <ul className={ul}>
            <li>Port: {data.site.port}</li>
            <li>Build Time: {data.site.buildTime}</li>
            <li>Host: {data.site.host}</li>
            </ul>
        </div>
    )
}


export default Footer