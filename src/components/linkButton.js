import React from "react"
import buttonStyles from "../styles/button.module.css"

const LinkButton = ({ text, linkTo }) => {
  return (
    <a
      className={buttonStyles.primaryBtn}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default LinkButton
