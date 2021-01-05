/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import "./layout.css"

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
          <div id="content">
            <main>{children}</main>
          </div>
        </div>
      </div>
      <footer>© {new Date().getFullYear()}, Hallvard Jensen</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
