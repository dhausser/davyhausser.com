import React from 'react'
import { graphql } from 'gatsby'
import { Project } from '../components/project'

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      image {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      slug
    }
  }
`

function ProjectPage({ data }: any) {
  const { projectsJson: project } = data
  return (
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.gatsbyImageData}
      description={project.description}
      tags={project.tags}
      slug={project.slug}
      url={project.url}
    />
  )
}

export default ProjectPage
