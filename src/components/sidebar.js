import React from "react"
import config from "../config/index"
import Burger from "./burger"
import { Link } from "gatsby"
import sidebarStyles from "../styles/sidebar.module.css"

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { navLinks } = config

  const onLinkClicked = () => {
    setIsSidebarOpen(false)
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
              {navLink.url.startsWith("/#") ? (
                <Link to={navLink.url} onClick={onLinkClicked}>
                  {navLink.name}
                </Link>
              ) : (
                <a href={navLink.url} onClick={onLinkClicked}>
                  {navLink.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
