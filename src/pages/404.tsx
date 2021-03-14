import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout, SEO } from '../components'
import { DataType } from '../types'

export default function NotFoundPage({ data }: PageProps<DataType>) {
  const { siteMetadata } = data.site
  return (
    <Layout>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
