import React, { useState } from "react"
import config from "../config/index"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  const { siteShortTitle } = config
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isHeaderShown, setIsHeaderShown] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  let prevScrollPos = window.pageYOffset

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset
    prevScrollPos > currentScrollPos || currentScrollPos <= 80
      ? setIsHeaderShown(true)
      : setIsHeaderShown(false)
    prevScrollPos = currentScrollPos
  })

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth))

  return (
    <header
      className={`${isHeaderShown ? headerStyles.show : headerStyles.hide}`}
    >
      <div className={headerStyles.headerWrapper}>
        <h1 className={headerStyles.brand}>
          <a href="#intro">{siteShortTitle}</a>
        </h1>
        {windowWidth > 991.98 ? (
          <Navbar />
        ) : (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setIsHeaderShown={setIsHeaderShown}
          />
        )}
      </div>
    </header>
  )
}

export default Header
