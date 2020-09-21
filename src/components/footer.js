import React from "react"
import footerStyles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerWrapper}>
        <h1 className={footerStyles.brand}>
          <a href="http://localhost:8000/">RO</a>
        </h1>
        <p className={footerStyles.credit}>
          {"Designed & Coded by"}
          <br />
          <strong>
            <a href="https://github.com/ren1el/portfolio">{"Reniel Ocampo"}</a>
          </strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer
