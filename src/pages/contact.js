import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <div>
      <p>{`I'd love to talk! Email me at `}
        <a href="mailto:davy.hausser@gmail.com">davy.hausser@gmail.com</a>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
