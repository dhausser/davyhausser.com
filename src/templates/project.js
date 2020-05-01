import React from "react"
import { graphql } from "gatsby"

import Project from "../components/project"

export default ({ data: { sitesYaml: project } }) => {
  console.log(project)
  return (
    <div
      style={{
        padding: "32px",
        maxWidth: "1140px",
        margin: "0 auto"
      }}
    >
      <Project project={project} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    sitesYaml(slug: { eq: $slug }) {
      title
      slug
      main_url
      url
      source_url
      description
      categories
      built_by
      built_by_url
      childScreenshot {
        screenshotFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
