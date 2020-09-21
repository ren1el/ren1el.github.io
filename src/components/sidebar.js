import React from "react"
import Burger from "./burger"
import sidebarStyles from "../styles/sidebar.module.css"

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setIsHeaderShown }) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false)
    setIsHeaderShown(false)
  }

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
            <a href="#about" onClick={closeSidebar}>
              About
            </a>
          </li>
          <li className={sidebarStyles.link}>
            <a href="#projects" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li className={sidebarStyles.link}>
            <a href="http://www.google.com/" onClick={closeSidebar}>
              Résumé
            </a>
          </li>
          <li className={sidebarStyles.link}>
            <a href="#contact" onClick={closeSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
