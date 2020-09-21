import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import projectsStyles from "../styles/projects.module.css"
import Card from "./card"
import { FaGithub } from "react-icons/fa"

const Projects = ({ isAboutAnimationDone }) => {
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
        <Card
          isAboutAnimationDone={isAboutAnimationDone}
          order={1}
          thumbnail={"https://i.postimg.cc/vHKpMJn9/3.png"}
          type={"Side Project"}
          title={"Zyllabi"}
          description={
            "A full stack web application that crowd-sources and organizes course syllabi from UC Irvine."
          }
          tags={[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
            "Google API",
            "Bootstrap",
          ]}
          url={"https://shielded-brushlands-61437.herokuapp.com/"}
          githubUrl={""}
        />
        <Card
          isAboutAnimationDone={isAboutAnimationDone}
          order={2}
          thumbnail={"https://i.postimg.cc/FHw8hsVX/1-copy.png"}
          type={"Research Project"}
          title={"Animal Actions"}
          description={
            "A published Alexa skill designed for kids that asks them to listen and respond to sounds of animals and their characterized actions."
          }
          tags={["Amazon Alexa", "Node.js", "Voice interaction"]}
          url={""}
        />
        <Card
          isAboutAnimationDone={isAboutAnimationDone}
          order={3}
          thumbnail={"https://i.postimg.cc/bw8Npj8r/2-copy.png"}
          type={"Side Project"}
          title={"E-commerce Landing Page Concept"}
          description={
            "A responsive e-commerce landing page that mimics online fashion product websites. Created using HTML, CSS and pure JavaScript and implements design qualities similar to professionally made websites (sliding sidebar, CSS & JavaScript animations, CSS flexbox techniques, responsiveness with media queries, etc.)"
          }
          tags={["Web Development"]}
          url={""}
        />
        <Card
          isAboutAnimationDone={isAboutAnimationDone}
          order={4}
          thumbnail={"https://i.postimg.cc/fWr2y6HT/zyllabi.png"}
          type={"Class Project"}
          title={"Sleep Tracker"}
          description={
            "A minimal, hybrid iOS application that allows users to log overnight sleep and their “sleepiness” throughout the day"
          }
          tags={["Ionic", "Mobile App"]}
          url={""}
        />
      </div>
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
    </section>
  )
}

export default Projects
