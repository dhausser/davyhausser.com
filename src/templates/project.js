import React from "react"
import { graphql } from "gatsby"

import Project from "../components/project"

export default ({ data: { projectsJson: project } }) => (
  <div
    style={{
      padding: "32px",
      maxWidth: "1140px",
      margin: "0 auto"
    }}
  >
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      tags={project.tags}
      url={project.url}
      repo={project.repo}
    />
  </div>
)

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      repo
      tags
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
