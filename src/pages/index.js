import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
// import { ContactHeader, ContactForm } from "../components/contact"

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 40px 0;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default ({ data: { site, allProjectsJson } }) => (
  <Layout>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <Grid>
      {allProjectsJson.edges.slice(0, 4).map(({ node: project }) => (
        <ProjectPreview
          key={`preview-${project.slug}`}
          title={project.title}
          description={project.description}
          slug={project.slug}
          tags={project.tags}
          url={project.url}
          repo={project.repo}
          imageData={project.image.childImageSharp.fluid}
        />
      ))}
      {/* <ContactHeader /> */}
      {/* <ContactForm /> */}
    </Grid>
  </Layout>
)

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          url
          repo
          image {
            childImageSharp {
              fluid(
                fit: COVER
                # maxWidth: 600
                # maxHeight: 400
                # cropFocus: NORTHWEST
                grayscale: true
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
