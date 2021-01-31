import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="pageWrapper">
        <div id="col-1">
          <Menu />
        </div>
        <div id="col-2">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div id="content" className="box">
            <main>{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
