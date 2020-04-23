import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ContactPage = ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>Contact — {site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <div className="two-grids -contact">
      <div
        className="post-thumbnail"
      >
        <h1 className="post-title">Get in Touch</h1>
        <p>Let me help you kick start your next project &rarr;</p>
      </div>
      <div>
        <form className="form-container" name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button className="button -primary" type="submit" action="/pages/success">Send</button>
          </p>
        </form>
      </div>
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
  }
`
