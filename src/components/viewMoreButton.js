import React, { useEffect } from "react"
import config from "../config/index"
import { FaGithub } from "react-icons/fa"
import viewMoreButtonStyles from "../styles/viewMoreButton.module.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ViewMoreButton = () => {
  const { socialMedia } = config
  const [ref, inView] = useInView()
  const buttonControls = useAnimation()

  useEffect(() => {
    if (inView) {
      buttonControls.start({ opacity: 1, x: 0 })
    }
  }, [buttonControls, inView])

  return (
    <motion.div
      className={viewMoreButtonStyles.githubLink}
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={buttonControls}
    >
      <a
        className={viewMoreButtonStyles.githubBtn}
        href={socialMedia.find(socialLink => socialLink.name === "GitHub").url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <span className={viewMoreButtonStyles.ml}>{"View more on GitHub"}</span>
      </a>
    </motion.div>
  )
}

export default ViewMoreButton
