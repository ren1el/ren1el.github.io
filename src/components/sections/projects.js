import React, { useEffect } from "react"
import config from "../../config/index"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import projectsStyles from "../../styles/projects.module.css"
import Card from "../card"
import { FaGithub } from "react-icons/fa"

const Projects = ({ isAboutAnimationDone }) => {
  const { projects } = config
  const [ref, inView] = useInView()
  const headingControls = useAnimation()

  useEffect(() => {
    if (inView) {
      headingControls.start({ opacity: 1, x: 0 })
    }
  }, [headingControls, inView])

  return (
    <section id="projects">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={headingControls}
      >
        <h2>Some things I’ve made:</h2>
      </motion.div>
      <div className={projectsStyles.projects}>
        {projects.map((project, index) => (
          <Card
            key={`${project.title}${index}`}
            isAboutAnimationDone={isAboutAnimationDone}
            order={index}
            thumbnailFile={project.thumbnailFile}
            type={project.type}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={headingControls}
      >
        <div className={projectsStyles.githubLink}>
          <a
            className={projectsStyles.githubBtn}
            href={"https://github.com/ren1el"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span className={projectsStyles.ml}>{"View more on GitHub"}</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
