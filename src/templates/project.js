import React from "react"
import { graphql } from "gatsby"

import Project from "../components/project"

const ProjectPage = ({ data: { projectsJson: project } }) => (
  <Project
    title={project.title}
    imageData={project.image.childImageSharp.fluid}
    description={project.description}
    tags={project.tags}
    url={project.url}
    repo={project.repo}
  />
)

export default ProjectPage
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
