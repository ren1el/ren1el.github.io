import React, { useState } from "react"
import { Helmet } from "react-helmet"
import config from "../config/index"
import "typeface-inter"
import "../styles/global.module.css"
import Layout from "../components/layout"
import Intro from "../components/sections/intro"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"

const Home = () => {
  const { siteTitle, siteIcon } = config
  const [isAboutAnimationDone, setIsAboutAnimationDone] = useState(false)

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={siteIcon} />
        <title>{siteTitle}</title>
      </Helmet>
      <Intro />
      <About setIsAboutAnimationDone={setIsAboutAnimationDone} />
      <Projects isAboutAnimationDone={isAboutAnimationDone} />
      <Contact />
    </Layout>
  )
}

export default Home
