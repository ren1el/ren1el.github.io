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
          <li className={sidebarStyles.link}>
            <a href="#about" onClick={() => setIsSidebarOpen(false)}>
              About
            </a>
          </li>
          <li className={sidebarStyles.link}>
            <a href="#projects" onClick={() => setIsSidebarOpen(false)}>
              Projects
            </a>
          </li>
          <li className={sidebarStyles.link}>Résumé</li>
          <li className={sidebarStyles.link}>
            <a href="#contact" onClick={() => setIsSidebarOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
