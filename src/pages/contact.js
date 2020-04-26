import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import {
  TwoGrids,
  PostThumbnail,
  PostTitle,
  FormContainer,
  SubmitButton
} from "../utils/styles"

const ContactPage = ({ data: { site, file } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <TwoGrids className="-contact">
      <PostThumbnail
        style={{
          backgroundImage: `url(${file.childImageSharp.fluid.src})`
        }}
      >
        <PostTitle>Get in Touch</PostTitle>
        <p>Let me help you kick start your next project &rarr;</p>
      </PostThumbnail>
      <div>
        <FormContainer name="contact-form" method="POST" data-netlify="true">
          <p>
            <input type="text" name="name" placeholder="Name" />
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" />
          </p>
          <p>
            <textarea name="message" placeholder="Message"></textarea>
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p>
              <SubmitButton type="submit" />
            </p>
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
    file(relativePath: { eq: "images/deepspace.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
