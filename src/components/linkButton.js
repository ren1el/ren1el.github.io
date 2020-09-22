import React from "react"
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa"

import buttonStyles from "../styles/button.module.css"

const LinkButton = ({ text, linkTo }) => {
  const textLower = text.toLowerCase()

  return (
    <a
      className={buttonStyles.primaryBtn}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {textLower === "github" && <FaGithub />}
      {textLower === "linkedin" && <FaLinkedin />}
      {textLower === "instagram" && <FaInstagram />}
      {textLower === "dribbble" && <FaDribbble />}

      <span className={buttonStyles.ml}>{text}</span>
    </a>
  )
}

export default LinkButton
