/** @jsx jsx */
import { graphql, Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Contact from "../components/contact"
// import { ContactHeader, ContactForm } from "../components/contact"
// import { Grid } from "./index"

const Button = styled("div")`
  width: 100%;
  padding: 18px 27px;
  display: inline-block;
  background: var(--btn-bg);
  border: 1px solid var(--btn-bdr);
  border-radius: 9px;
  text-decoration: none;
  color: var(--btn-text-color);
  font-size: 16px;
  font-weight: 400;
  transition: background-color 0.3s linear;
  &.-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-text-color);
    &:hover {
      background-color: var(--secondary-color);
      color: var(--primary-text-color);
      text-decoration: none;
    }
  }
  &:hover {
    background-color: var(--btn-hover-bg);
    color: var(--btn-hover-text-color);
  }
`

export default ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <Contact />
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
