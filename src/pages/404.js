import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageMetadata from '../components/page-metadata'

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <PageMetadata
        title={`404: Not Found | ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.description}
      />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

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
