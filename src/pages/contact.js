/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { ContactHeader, ContactForm } from "../components/contact"
import { Grid, Button } from "../utils/styles"

const ContactPage = ({ data: { site, file } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <Grid>
      <ContactHeader file={file} />
      <ContactForm />
    </Grid>
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
  </Layout>
)
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "images/deepspace.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
