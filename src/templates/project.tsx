import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"
import { ProjectProps } from "../types"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      image
      # {
      #   childImageSharp {
      #     fluid {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
    file(relativePath: { eq: "images/roadmap.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function ProjectPage({ data }: ProjectProps) {
  const { projectsJson: project } = data
  return (
    <Layout>
      <Project
        title={project.title}
        // imageData={project.image}
        imageData={data.file.childImageSharp.fluid}
        description={project.description}
        tags={project.tags}
        url={project.url}
      />
    </Layout>
  )
}

export default ProjectPage
