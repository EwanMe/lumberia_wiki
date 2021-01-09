import React, { useState } from "react"
import Link from "gatsby-link"

export default function Menu() {
  const [isActive, setActive] = useState(0)

  // Toggles the "transform" class which activates the hamburger menu on mobile.
  const handleToggle = () => {
    setActive(!isActive)
  }

  const menuListElements = (
    <>
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
        <Link to="/allContent">All Content</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>
    </>
  )

  return (
    <>
      <div id="logoBanner" role="banner">
        <Link to="/" id="logo" title="Go to main page" />
      </div>
      <nav id="stdMenu" className="menu" role="navigation">
        <ul className="box">{menuListElements}</ul>
      </nav>
      <nav
        id="hamburger"
        className={`menu ${isActive ? "transform" : ""}`}
        role="navigation"
        onClick={handleToggle}
      >
        <span />
        <span />
        <span />

        <ul className={`box ${isActive ? "transform" : ""}`}>
          {menuListElements}
        </ul>
      </nav>
    </>
  )
}
