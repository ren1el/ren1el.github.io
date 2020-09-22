import React from "react"
import { Link } from "gatsby"
import config from "../config/index"
import "../styles/navbar.module.css"

const Navbar = () => {
  const { navLinks } = config

  return (
    <nav>
      <ul>
        {navLinks.map(navLink => (
          <li key={`navLink${navLink.name}`}>
            {navLink.url.startsWith("/#") ? (
              <Link to={navLink.url}>{navLink.name}</Link>
            ) : (
              <a href={navLink.url}>{navLink.name}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
