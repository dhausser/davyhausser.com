import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
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
