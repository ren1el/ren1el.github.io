import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import LinkButton from "../components/linkButton"
import aboutStyles from "../styles/about.module.css"

const About = ({ setIsAboutAnimationDone }) => {
  const [ref, inView] = useInView()
  const headingControls = useAnimation()
  const sectionControls = useAnimation()

  useEffect(() => {
    const animationSequence = async () => {
      if (inView) {
        await headingControls.start({ opacity: 1, x: 0 })
        await sectionControls.start({ opacity: 1, y: 0 })
        setIsAboutAnimationDone(true)
      }
    }

    animationSequence()
  }, [headingControls, sectionControls, inView, setIsAboutAnimationDone])

  return (
    <section id="about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={headingControls}
      >
        <h2>A lil’ about me:</h2>
      </motion.div>
      <motion.div
        className={aboutStyles.about}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={sectionControls}
      >
        <div className={aboutStyles.pictureWrapper}>
          <img
            src={"https://i.postimg.cc/8ctFrHd2/IMG-4458.png"}
            className={aboutStyles.picture}
            alt="Me!"
          />
        </div>
        <div className={aboutStyles.text}>
          <div className={aboutStyles.blurb}>
            My name is <strong>Reniel Ocampo</strong> and I’m a recent computer
            science grad from the{" "}
            <strong>University of California, Irvine</strong>. I attribute my
            start into programming when I began coding static HTML pages on
            Neopets. I’ve since grown an interest in web development, graphic
            design, and computer architecture. Aside from developing I’m a big
            reader, concert goer, and ukulele fiddler. I also really, really
            like Ariana Grande.
          </div>

          <div className={aboutStyles.links}>
            <strong>You can also find me at these places:</strong>
            <ul className={aboutStyles.aboutMeList}>
              <li>
                <LinkButton
                  text={"GitHub"}
                  linkTo={"https://github.com/ren1el"}
                  github
                />
              </li>
              <li>
                <LinkButton
                  text={"LinkedIn"}
                  linkTo={"https://www.linkedin.com/in/renielocampo/"}
                  linkedin
                />
              </li>
              <li>
                <LinkButton
                  text={"Instagram"}
                  linkTo={"https://www.instagram.com/ren1el/"}
                  instagram
                />
              </li>
              <li>
                <LinkButton
                  text={"Dribbble"}
                  linkTo={"https://dribbble.com/ren1el"}
                  dribbble
                />
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
