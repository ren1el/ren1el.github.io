import React from "react"
import "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="http://www.google.com/">Résumé</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
