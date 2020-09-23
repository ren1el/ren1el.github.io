import React from "react"
import { Helmet } from "react-helmet"
import config from "../config/index"
import pageNotFoundStyles from "../styles/404.module.css"
import Layout from "../components/layout"

const NotFound = () => {
  const { siteIcon } = config

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={siteIcon} />
        <title>404: Not Found</title>
      </Helmet>
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

export default NotFound
