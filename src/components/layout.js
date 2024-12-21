import { Link,useStaticQuery,graphql } from "gatsby"
import * as React from "react"
import { headLine, container, navLinks, navLinkItem, navLinkText,siteTitle } from './layout.module.css'

import Footer from "./footer"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query{
        site {
    siteMetadata {
      title
    }
  }
        }
        `)
    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Master</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main >
                <h1 className={headLine}>{pageTitle}</h1>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout 