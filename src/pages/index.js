import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import { ContactHeader, ContactForm } from "../components/contact"
import { Grid } from "../utils/styles"

const IndexPage = ({ data: { site, allProjectsJson, file } }) => (
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
      <ContactHeader />
      <ContactForm />
    </Grid>
  </Layout>
)

export default IndexPage
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
                maxWidth: 400
                maxHeight: 250
                cropFocus: NORTHWEST
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
