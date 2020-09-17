import React from "react"
import LinkButton from "../components/linkButton"
import aboutStyles from "../styles/about.module.css"

const About = () => {
  return (
    <section>
      <h2>A lil’ about me:</h2>
      <div className={aboutStyles.about}>
        <div className={aboutStyles.picture}></div>
        <div className={aboutStyles.text}>
          <div className={aboutStyles.blurb}>
            My name is{" "}
            <span className={aboutStyles.specialText}>Reniel Ocampo</span> and
            I’m a recent computer science grad from the University of
            California, Irvine. I attribute my start into programming when I
            began coding static HTML pages on Neopets. I’ve since grown an
            interest in{" "}
            <span className={aboutStyles.specialText}>web development</span>,{" "}
            <span className={aboutStyles.specialText}>graphic design</span>, and{" "}
            <span className={aboutStyles.specialText}>
              computer architecture
            </span>
            . Aside from developing, I like to read, go to concerts, and fiddle
            with my ukulele. I also really, really like Ariana Grande.
          </div>

          <div className={aboutStyles.links}>
            <strong>You can also find me at these places:</strong>
            <ul className={aboutStyles.aboutMeList}>
              <li>
                <LinkButton
                  text={"GitHub"}
                  linkTo={"https://github.com/ren1el"}
                />
              </li>
              <li>
                <LinkButton
                  text={"LinkedIn"}
                  linkTo={"https://www.linkedin.com/in/renielocampo/"}
                />
              </li>
              <li>
                <LinkButton
                  text={"Instagram"}
                  linkTo={"https://www.instagram.com/ren1el/"}
                />
              </li>
              <li>
                <LinkButton
                  text={"Dribbble"}
                  linkTo={"https://dribbble.com/ren1el"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
