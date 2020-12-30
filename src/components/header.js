import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: "#D5A18E",
      margin: "0 0 20px 0",
      padding: "10px",
    }}
  >
    <Container
      style={{
        margin: `0 auto`,
      }}
    >
      <Row
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col xs={1}>
          <Link to="/">
            <img
              src={require("../images/NV_logo.png")}
              width="100"
              heigth="100"
              alt="logo"
            />
          </Link>
        </Col>
        <Col>
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
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
