import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import introStyles from "../../styles/intro.module.css"

const Intro = () => {
  const [ref, inView] = useInView()
  const introControls = useAnimation()

  useEffect(() => {
    if (inView) {
      introControls.start({ opacity: 1, y: 0 })
    }
  }, [introControls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={introControls}
    >
      <section className={introStyles.introWrapper}>
        <p className={introStyles.hello}>Howdy! I’m Reniel.</p>
        <p className={introStyles.welcome}>Welcome to my portfolio.</p>
      </section>
    </motion.div>
  )
}

export default Intro
