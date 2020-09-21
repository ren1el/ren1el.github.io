import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import cardStyles from "../styles/card.module.css"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Card = ({
  isAboutAnimationDone,
  order,
  thumbnail,
  type,
  title,
  description,
  tags,
  url,
  githubUrl,
}) => {
  const [ref, inView] = useInView()
  const cardControls = useAnimation()

  useEffect(() => {
    if (inView && isAboutAnimationDone) {
      cardControls.start({ opacity: 1, y: 0 })
    }
  }, [cardControls, inView, isAboutAnimationDone])

  return (
    <motion.div
      className={cardStyles.card}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={cardControls}
    >
      <img
        className={`${cardStyles.thumbnail} ${
          order % 2 === 0 ? cardStyles.left : cardStyles.right
        }`}
        src={thumbnail}
        alt={`${title} screenshot`}
      />
      <div className={cardStyles.body}>
        <div className={cardStyles.type}>{type}</div>
        <div className={cardStyles.title}>
          {title}{" "}
          <a className={cardStyles.link} href={url}>
            <FaExternalLinkAlt />
          </a>
          <a className={cardStyles.link} href={githubUrl}>
            <FaGithub />
          </a>
        </div>
        <div className={cardStyles.description}>{description}</div>
        <ul className={cardStyles.tags}>
          {tags.map(tag => (
            <li
              className={cardStyles.tag}
              key={`${tag} ${new Date().getTime()}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Card
