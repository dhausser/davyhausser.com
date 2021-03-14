import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetaData } from '../pages'

export default function useSiteMetadata(): SiteMetaData {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return site.siteMetadata
}
