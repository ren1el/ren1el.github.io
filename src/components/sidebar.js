import React from "react"
import config from "../config/index"
import Burger from "./burger"
import sidebarStyles from "../styles/sidebar.module.css"

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setIsHeaderShown }) => {
  const { navLinks } = config

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
          {navLinks.map(navLink => (
            <li className={sidebarStyles.link}>
              <a href={navLink.url} onClick={closeSidebar}>
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
