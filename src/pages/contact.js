/** @jsx jsx */
import { graphql, Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Container from "../components/container"
import EmailCaptureForm from "../components/email-capture-form"
import Button from "../components/button"

export default ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <div
      style={{
        padding: "32px",
        maxWidth: "1140px",
        margin: "0 auto"
      }}
    >
      <Container>
        <EmailCaptureForm isHomepage={false} confirmMessage="Success!" />
      </Container>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 20px;
          padding: 20px;
        `}
      >
        <Link to="/">
          <Button>&larr; Home</Button>
        </Link>
      </div>
    </div>
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
