import React, { useEffect } from "react"
import contactStyles from "../../styles/contact.module.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Contact = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="contact">
      <motion.div
        className={contactStyles.contactWrapper}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <p className={contactStyles.heading}>It was great having you! :)</p>
        <p className={contactStyles.heading}>
          Feel free to contact me @{" "}
          <span
            className={`${contactStyles.email} ${contactStyles.specialText}`}
          >
            <a href="mailto:webmaster@example.com">renielxocampo@gmail.com</a>
          </span>
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
