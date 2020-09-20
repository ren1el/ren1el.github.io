import React from "react"
import contactStyles from "../styles/contact.module.css"

const Contact = () => {
  return (
    <section id="contact">
      <div className={contactStyles.contactWrapper}>
        <p className={contactStyles.heading}>It was great having you! :)</p>
        <p className={contactStyles.heading}>
          Feel free to contact me @{" "}
          <span
            className={`${contactStyles.email} ${contactStyles.specialText}`}
          >
            <a href="mailto:webmaster@example.com">renielxocampo@gmail.com</a>
          </span>
        </p>
      </div>
    </section>
  )
}

export default Contact
