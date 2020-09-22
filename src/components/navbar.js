import React from "react"
import config from "../config/index"
import "../styles/navbar.module.css"

const Navbar = () => {
  const { navLinks } = config

  return (
    <nav>
      <ul>
        {navLinks.map(navLink => (
          <li key={`navLink${navLink.name}`}>
            <a href={navLink.url}>{navLink.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
