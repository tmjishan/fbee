import { Link } from "gatsby"
import * as React from "react"
import { headLine, container, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Master</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                </ul>
            </nav>
            <main >
                <h1 className={headLine}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout 