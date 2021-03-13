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
    <Layout>
      <Project
        title={project.title}
        imageData={data.file.childImageSharp.gatsbyImageData}
        description={project.description}
        tags={project.tags}
        url={project.url}
      />
    </Layout>
  )
}

export default ProjectPage
