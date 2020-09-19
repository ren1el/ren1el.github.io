import React from "react"
import "typeface-inter"
import "../styles/global.module.css"
import Layout from "../components/layout"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const Home = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
