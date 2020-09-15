import React from "react"
import "typeface-inter"
import "../styles/global.module.css"
import Layout from "../components/layout"
import Intro from "../components/intro"
import About from "../components/about"

const Home = () => {
  return (
    <Layout>
      <Intro />
      <About />
    </Layout>
  )
}

export default Home
