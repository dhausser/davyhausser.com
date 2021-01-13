import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Contact from "../components/contact"
import { ProjectLink } from "../utils/styles"

const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
`

export default function Wanderlost({ data }) {
  const { siteMetadata } = data.site
  return (
    <Layout>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
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
      <Contact />
    </Layout>
  )
}

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
