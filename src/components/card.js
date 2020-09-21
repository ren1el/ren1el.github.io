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
  thumbnail,
  type,
  title,
  description,
  tags,
  url,
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

  console.log(`nodes: ${data.images.nodes}`)

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
      <Img
        className={`${cardStyles.thumbnail} ${
          order % 2 === 0 ? cardStyles.left : cardStyles.right
        }`}
        fluid={
          data.images.nodes.find(
            image => image.childImageSharp.fluid.originalName === thumbnail
          ).childImageSharp.fluid
        }
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
