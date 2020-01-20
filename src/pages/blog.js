import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="My Personal Blog" description="Davy Hausser Personal Blog" />
      <p>
        Welcome to my personal blog where I like to talk about my learnings adn
        progress as web developer
      </p>
    </Layout>
  )
}
