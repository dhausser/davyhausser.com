/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageMetadata from '../components/page-metadata'
import HomepageSection from '../components/homepage-section'
import EmailCaptureForm from '../components/email-capture-form'

export default ({ data }) => (
  <Layout>
    <PageMetadata
      title={`Contact | ${data.site.siteMetadata.author.name}`}
      description={data.site.siteMetadata.description}
    />
    <HomepageSection>
      <EmailCaptureForm isHomepage />
    </HomepageSection>
  </Layout>
)

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        author {
          name
        }
        description
      }
    }
  }
`
