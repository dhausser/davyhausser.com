/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { TwoGrids, PostThumbnail, PostTitle, FormContainer, SubmitButton } from "../utils/styles"

const ContactPage = ({ data: { site, file } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <TwoGrids>
      <PostThumbnail style={{
        backgroundImage: `url('/assets/palmtree.jpg')`
      }}>
        <PostTitle>Get in Touch</PostTitle>
        <p>Let me help you kick start your next project &rarr;</p>
      </PostThumbnail>
      <div>
        <FormContainer name="contact" method="POST" netlify="true">
          <div>
            <label>Your Name: <input type="text" name="name" /></label>
          </div>
          <div>
            <label>Your Email: <input type="email" name="email" /></label>
          </div>
          <div>
            <label>Message: <textarea name="message"></textarea></label>
          </div>
          <div css={css` display: "flex"; justify-content: "flex-end";`}>
            <SubmitButton
              type="submit"
              action="/pages/success"
              className="button -primary"
              css={css`margin-right: 0;`}
            />
          </div>
        </FormContainer>
      </div>
    </TwoGrids>
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
    file(relativePath: { eq: "palmtree.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
