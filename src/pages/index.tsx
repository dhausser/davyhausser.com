import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout, SEO, About, Skills, Featured, Contact } from 'components'
import { DataType } from 'types'

export default function HomePage({ data }: PageProps<DataType>) {
  const { allProjectsJson, site: { siteMetadata} } = data
  return (
    <Layout>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
      <About />
      <Skills />
      <Featured projects={allProjectsJson.edges} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
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
    }
  }
`
