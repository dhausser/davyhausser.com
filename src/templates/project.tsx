import * as React from 'react'
import { graphql } from 'gatsby'
import { Project } from 'components'
import { ProjectProps } from 'types'

function ProjectPage({ data }: ProjectProps) {
  const { projectsJson: project } = data
  return (
    <Project
      title={project.title}
      image={project.image}
      description={project.description}
      tags={project.tags}
      slug={project.slug}
      url={project.url}
      repository={project.repository}
    />
  )
}

export default ProjectPage

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      slug
      url
      repository
      tags
      image {
        childImageSharp {
          gatsbyImageData(
            width: 960
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
