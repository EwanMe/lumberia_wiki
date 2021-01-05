import React from "react"
import Link from "gatsby-link"

export default function Menu() {
  return (
    <>
      <div id="logoBanner" role="banner">
        <Link to="/" id="logo" title="Go to main page" />
      </div>
      <nav id="menu" role="navigation">
        <ul className="box">
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="">Articles</Link>
          </li>
          <li>
            <Link to="">Books</Link>
          </li>
          <li>
            <Link to="">Random Page</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
