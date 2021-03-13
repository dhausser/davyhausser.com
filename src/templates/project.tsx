import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Project } from "../components/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      image
      slug
    }
    file(relativePath: { eq: "images/roadmap.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

function ProjectPage({ data }: any) {
  const { projectsJson: project } = data
  return (
    <Project
      title={project.title}
      imageData={data.file.childImageSharp.gatsbyImageData}
      description={project.description}
      tags={project.tags}
      slug={project.slug}
      url={project.url}
    />
  )
}

export default ProjectPage
