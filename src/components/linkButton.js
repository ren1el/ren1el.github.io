import React from "react"
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa"

import buttonStyles from "../styles/button.module.css"

const LinkButton = ({
  text,
  linkTo,
  github,
  linkedin,
  instagram,
  dribbble,
}) => {
  return (
    <a
      className={buttonStyles.primaryBtn}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {github && <FaGithub />}
      {linkedin && <FaLinkedin />}
      {instagram && <FaInstagram />}
      {dribbble && <FaDribbble />}

      <span className={buttonStyles.ml}>{text}</span>
    </a>
  )
}

export default LinkButton
