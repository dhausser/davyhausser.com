import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout, SEO, About, Skills, Featured } from 'components'
import { DataType } from 'types'

export default function HomePage({ data }: PageProps<DataType>) {
  return (
    <Layout>
      <SEO title="Portfolio" description={data.site.siteMetadata.description} />
      <About />
      <Skills />
      <Featured projects={data.allProjectsJson.edges} />
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
