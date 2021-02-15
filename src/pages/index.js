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
import "../../static/demo.png"

const Home = () => {
  const { siteTitle, siteIcon } = config
  const [isAboutAnimationDone, setIsAboutAnimationDone] = useState(false)

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={siteIcon} />
        <title>{siteTitle}</title>

        <meta property="og:title" content="Reniel Ocampo" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/ren1el/ren1el.github.io/source/static/demo.png"
        />
        <meta
          property="og:description"
          content="Reniel Ocampo is a software engineer based in Orange County, California."
        />
        <meta property="og:url" content="https://ren1el.github.io" />
      </Helmet>
      <Intro />
      <About setIsAboutAnimationDone={setIsAboutAnimationDone} />
      <Projects isAboutAnimationDone={isAboutAnimationDone} />
      <Contact />
    </Layout>
  )
}

export default Home
