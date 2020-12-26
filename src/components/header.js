import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Col, Row } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    className="container-fluid"
    style={{
      backgroundColor: "#D5A18E",
      margin: "0",
      padding: "0",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <img
          src={require("../images/NV_logo.png")}
          width="100"
          heigth="100"
          alt="logo"
        />
      </Link>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#080604",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
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
