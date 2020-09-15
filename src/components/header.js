import React from "react"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  return (
    <header>
      <div class={headerStyles.headerWrapper}>
        <h1 class={headerStyles.brand}>RO</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Résumé</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
