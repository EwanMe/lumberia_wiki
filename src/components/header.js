import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id="headerWrapper">
      <Link to="/" id="logo">
        <img id="logoImage" src={require("../images/NV_logo.png")} alt="logo" />
      </Link>
      <h1 id="headerTitle">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
