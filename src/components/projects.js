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
            "A full stack web application that crowd-sources and organizes course syllabi from UC Irvine. I wanted to learn how to design an API and create an application with a working backend. I started this project in hopes that it would alleviate the stress of signing up for classes that don’t have much feedback online."
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
            "A published Alexa skill that quizzes kids on the sounds of animals and their characterized actions. I worked with a team under a PhD student to iteratively develop this application and research ways to design voice user interfaces for children. I was mainly in charge of refactoring the codebase and implementing new features such as visuals."
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
            "A responsive e-commerce landing page that mimics online fashion product websites. This static site was an exercise on how well I could use pure HTML, CSS, and JavaScript to apply design qualities similar to professionally made websites (including typography design, animations, flexbox techniques, responsiveness, etc.)"
          }
          tags={["HTML", "CSS", "JavaScript", "Web development", "Web design"]}
          url={""}
        />
        <Card
          isAboutAnimationDone={isAboutAnimationDone}
          order={4}
          thumbnail={"https://i.postimg.cc/fWr2y6HT/zyllabi.png"}
          type={"Class Project"}
          title={"Sleep Tracker"}
          description={
            "A minimal, hybrid iOS application that allows users to log overnight sleep and their “sleepiness” throughout the day. This was a project for my user interaction software class and demonstrates my ability to create simple mobile interfaces and adapt to new frameworks/libraries."
          }
          tags={["Ionic", "Mobile app development"]}
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
