import React from "react"
import NavbarLink from "./navbarLink"
import config from "../config/index"
import "../styles/navbar.module.css"

const Navbar = () => {
  const { navLinks } = config

  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => (
          <li key={`navLink${navLink.name}`}>
            <NavbarLink navLink={navLink} index={index} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
