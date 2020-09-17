import React from "react"
import burgerStyles from "../styles/burger.module.css"

const Burger = ({ setIsSidebarOpen }) => {
  return (
    <div
      className={burgerStyles.burger}
      role="button"
      onClick={() => setIsSidebarOpen(true)}
      onKeyDown={() => setIsSidebarOpen(true)}
      tabindex={0}
    >
      <div className={burgerStyles.line}></div>
      <div className={burgerStyles.line}></div>
      <div className={burgerStyles.line}></div>
    </div>
  )
}

export default Burger
