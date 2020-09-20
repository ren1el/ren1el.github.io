import React from "react"
import projectsStyles from "../styles/projects.module.css"
import Card from "./card"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <section id="projects">
      <h2>Some things I’ve made:</h2>
      <div className={projectsStyles.projects}>
        <Card
          order={1}
          thumbnail={"https://i.postimg.cc/fWr2y6HT/zyllabi.png"}
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
          order={3}
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
