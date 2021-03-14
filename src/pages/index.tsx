import React from 'react'
import { graphql, PageProps } from 'gatsby'
import {
  Layout,
  SEO,
  Intro,
  About,
  Skills,
  Featured,
  Contact,
} from '../components'
import { DataType } from '../types'

export default function HomePage({ data }: PageProps<DataType>) {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <Intro />
      <About />
      <Skills />
      <Featured projects={data.allProjectsJson.edges} />
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
