import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <header>
      <div className={headerStyles.headerWrapper}>
        <h1 className={headerStyles.brand}>RO</h1>
        {windowWidth > 991.98 ? (
          <Navbar />
        ) : (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </div>
    </header>
  )
}

export default Header
