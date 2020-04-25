import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          home {
            title
            description
          }
        }
      }
    }
  `)
  return (
    <div className="hero-header">
      <div className="headline">{data.site.siteMetadata.home.title}</div>
      <div className="primary-content">
        <p>{data.site.siteMetadata.home.description}</p>
      </div>
    </div>
  )
}