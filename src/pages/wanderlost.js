import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Contact from "../components/contact"

const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
`

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Wanderlost | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link
        rel="canonical"
        href={`${data.site.siteMetadata.description}wanderlost`}
      />
    </Helmet>
    <h1>Wanderlost</h1>
    <Img fluid={data.file.childImageSharp.fluid} />
    <LinkRow>
      <a href="https://wanderlost.vercel.app">
        <ProjectLink>
          Live <span>&#8250;</span>
        </ProjectLink>
      </a>
      <a href="https://github.com/dhausser/wanderlost">
        <ProjectLink>
          Code <span>&#8250;</span>
        </ProjectLink>
      </a>
    </LinkRow>
    <ul>
      <li>Next.js</li>
      <li>GraphQL</li>
      <li>Prisma</li>
      <li>TypeScript</li>
    </ul>
    <p>Build by: Davy Hausser</p>
    <Contact isHomepage={true} />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(relativePath: { eq: "wanderlost-dark.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
