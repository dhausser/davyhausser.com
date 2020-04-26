import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import Contact from "../components/contact"
import Instagram from "../components/instagram"
import { Grid } from "../utils/styles"

const IndexPage = ({ data: { site, allProjectsJson } }) => {
  console.log(allProjectsJson)
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Grid>
        {allProjectsJson.edges.map(({ node: project }) => (
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
        <Instagram />
      </Grid>
      <Contact />
    </Layout>
  )
}

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
                toFormat: WEBP
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
