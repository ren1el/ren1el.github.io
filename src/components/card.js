import React from "react"
import cardStyles from "../styles/card.module.css"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Card = ({
  order,
  thumbnail,
  type,
  title,
  description,
  tags,
  url,
  githubUrl,
}) => {
  return (
    <div className={cardStyles.card}>
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
              ey={`${tag} ${new Date().getTime()}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
