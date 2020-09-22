import React from "react"
import pageNotFoundStyles from "../styles/404.module.css"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <section className={pageNotFoundStyles.wrapper}>
        <h1 className={pageNotFoundStyles.pageNotFound}>404</h1>
        <p>
          There doesn’t seem to be a page here.
          <br />
          Did you mean to go somewhere else?
        </p>
      </section>
    </Layout>
  )
}

export default Home
