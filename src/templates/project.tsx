import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Project, Contact } from 'components'
import { ProjectProps } from 'types'

function ProjectPage({ data }: ProjectProps) {
  const { projectsJson: project } = data
  return (
    <Layout>
      <SEO title={project.title} description={project.description}/>
      <Project
        title={project.title}
        image={project.image}
        description={project.description}
        tags={project.tags}
        slug={project.slug}
        url={project.url}
        repository={project.repository}
      />
      <Contact />
    </Layout>
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
