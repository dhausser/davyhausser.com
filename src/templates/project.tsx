import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import Layout from "../components/layout"
import Project from "../components/project"

interface ProjectProps {
  data: {
    projectsJson: {
      title: string
      image: { childImageSharp: { fluid: FluidObject } }
      description: string
      tags: [string]
      url: string
    }
  }
}

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
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

const ProjectPage = ({ data: { projectsJson: project } }: ProjectProps) => (
  <Layout>
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      tags={project.tags}
      url={project.url}
    />
  </Layout>
)

export default ProjectPage
