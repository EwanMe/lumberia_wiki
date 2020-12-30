import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: "#D5A18E",
      margin: "0 0 20px 0",
      padding: "10px",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          width: "10%",
        }}
      >
        <img
          src={require("../images/NV_logo.png")}
          width="100"
          heigth="100"
          alt="logo"
        />
      </Link>
      <h1
        style={{
          margin: "0 0 0 10px",
        }}
      >
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
