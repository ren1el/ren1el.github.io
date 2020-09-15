import React from "react"
import introStyles from "../styles/intro.module.css"

const Intro = () => {
  return (
    <section className={introStyles.intro}>
      <p className={introStyles.hello}>Howdy! I’m Reniel.</p>
      <p className={introStyles.welcome}>Welcome to my portfolio.</p>
    </section>
  )
}

export default Intro
