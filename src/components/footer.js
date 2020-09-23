import React from "react"
import config from "../config/index"
import footerStyles from "../styles/footer.module.css"

const Footer = () => {
  const { siteUrl, footerLinks } = config
  const link = footerLinks[0]

  return (
    <footer>
      <div className={footerStyles.wrapper}>
        <h1 className={footerStyles.brand}>
          <a href={siteUrl}>RO</a>
        </h1>
        <p className={footerStyles.credit}>
          {"Designed & coded by"}
          <br />
          <strong>
            <a href={link.url}>{link.name}</a>
          </strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer
