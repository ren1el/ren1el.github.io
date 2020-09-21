import React, { useState } from "react"
import "typeface-inter"
import "../styles/global.module.css"
import Layout from "../components/layout"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const Home = () => {
  const [isAboutAnimationDone, setIsAboutAnimationDone] = useState(false)

  return (
    <Layout>
      <Intro />
      <About setIsAboutAnimationDone={setIsAboutAnimationDone} />
      <Projects isAboutAnimationDone={isAboutAnimationDone} />
      <Contact />
    </Layout>
  )
}

export default Home
