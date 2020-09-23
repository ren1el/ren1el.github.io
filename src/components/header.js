import React, { useState, useEffect } from "react"
import config from "../config/index"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  const { siteShortTitle, siteUrl } = config
  const [windowWidth, setWindowWidth] = useState(null)
  const [isHeaderShown, setIsHeaderShown] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset
      prevScrollPos > currentScrollPos || currentScrollPos <= 80
        ? setIsHeaderShown(true)
        : setIsHeaderShown(false)
      prevScrollPos = currentScrollPos
    })

    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <header
      className={`${isHeaderShown ? headerStyles.show : headerStyles.hide}`}
    >
      <div className={headerStyles.headerWrapper}>
        <h1 className={headerStyles.brand}>
          <a href={siteUrl}>{siteShortTitle}</a>
        </h1>
        {windowWidth !== null && windowWidth > 991.98 ? (
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
