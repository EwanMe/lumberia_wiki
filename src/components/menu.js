import React from "react"
import Link from "gatsby-link"

export default function Menu() {
  return (
    <nav role="navigation">
      <ul>
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
  )
}
