import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HeroHeader, Headline, PrimaryContent } from "../utils/styles"

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
    <HeroHeader>
      <Headline>{data.site.siteMetadata.home.title}</Headline>
      <PrimaryContent>
        <p>{data.site.siteMetadata.home.description}</p>
      </PrimaryContent>
    </HeroHeader>
  )
}