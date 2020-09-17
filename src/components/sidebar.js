import React from "react"
import Burger from "./burger"
import sidebarStyles from "../styles/sidebar.module.css"

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <Burger setIsSidebarOpen={setIsSidebarOpen} />
      <div
        className={`${sidebarStyles.sidebar} ${
          isSidebarOpen ? sidebarStyles.show : sidebarStyles.hide
        }`}
      >
        <button
          className={sidebarStyles.close}
          onClick={() => setIsSidebarOpen(false)}
        >
          X
        </button>
        <ul className={sidebarStyles.links}>
          <li className={sidebarStyles.link}>About</li>
          <li className={sidebarStyles.link}>Projects</li>
          <li className={sidebarStyles.link}>Résumé</li>
          <li className={sidebarStyles.link}>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
