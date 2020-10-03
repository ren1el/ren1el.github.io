import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import cardStyles from "../styles/card.module.css"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Card = ({
  isAboutAnimationDone,
  order,
  thumbnailFile,
  type,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
}) => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const [ref, inView] = useInView({ threshold: 0.5 })
  const cardControls = useAnimation()

  useEffect(() => {
    if (inView && isAboutAnimationDone) {
      cardControls.start({ opacity: 1, y: 0 })
    }
  }, [cardControls, inView, isAboutAnimationDone])

  return (
    <article>
      <motion.div
        className={cardStyles.card}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={cardControls}
      >
        <Img
          className={`${cardStyles.thumbnail} ${
            order % 2 === 0 ? cardStyles.right : cardStyles.left
          }`}
          fluid={
            data.images.nodes.find(
              image =>
                image.childImageSharp.fluid.originalName === thumbnailFile
            ).childImageSharp.fluid
          }
          alt={`${title} screenshot`}
        />

        <div className={cardStyles.body}>
          <div className={cardStyles.type}>{type}</div>
          <h3 className={cardStyles.title}>
            {title}{" "}
            {liveUrl.length > 0 && (
              <a
                className={cardStyles.link}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {githubUrl.length > 0 && (
              <a
                className={cardStyles.link}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}
          </h3>
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
    </article>
  )
}

export default Card
