import React from "react"
import footerStyles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerWrapper}>
        <h1 className={footerStyles.brand}>RO</h1>
        <p className={footerStyles.credit}>
          {"Designed & Coded by"}
          <br />
          <strong>{"Reniel Ocampo"}</strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer
