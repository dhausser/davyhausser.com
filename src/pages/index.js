import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Header from "../components/header"
import ProjectPreview from "../components/project-preview"
import SEO from "../components/seo"

export default ({ data }) => {
  const description =
    "What do I like to do? Lots of course but definitely enjoy building websites."
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <Header headerTitle="Showcase" />
      <p>{description}</p>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 5rem auto;
          width: 57ch;
        `}
      >
        {data.allProjectsJson.edges.map(({ node: project }) => {
          return (
            <ProjectPreview
              key={`preview-${project.slug.current}`}
              title={project.title}
              description={project.description}
              imageData={project.image.childImageSharp.fluid}
              slug={project.slug}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
