import React from "react"
import Header from "../components/header"
import layoutStyles from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.mainWrapper}>
      <Header />
      <main className={layoutStyles.contentWrapper}>{children}</main>
    </div>
  )
}

export default Layout
