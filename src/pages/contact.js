/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import HomepageSection from "../components/homepage-section"
import EmailCaptureForm from "../components/email-capture-form"

export default ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <HomepageSection>
      <EmailCaptureForm isHomepage />
    </HomepageSection>
  </Layout>
)

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
