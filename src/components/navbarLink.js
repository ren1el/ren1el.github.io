import React, { useEffect } from "react"
import { Link } from "gatsby"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const NavbarLink = ({ index, navLink }) => {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const navControls = useAnimation()

  useEffect(() => {
    if (inView) {
      navControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: (index / 2) * 0.3 },
      })
    }
  }, [navControls, inView, index])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={navControls}>
      {navLink.url.startsWith("/#") ? (
        <Link to={navLink.url}>{navLink.name}</Link>
      ) : (
        <a href={navLink.url} target="_blank" rel="noopener noreferrer">
          {navLink.name}
        </a>
      )}
    </motion.div>
  )
}

export default NavbarLink
