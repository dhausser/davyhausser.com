import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomepageSection from "../components/homepage-section"
import Project from "../components/project"

export default ({ data: { sitesYaml: project } }) => (
  <Layout>
    <Helmet>
      <title>{project.title}</title>
      <meta name="description" content={project.description} />
    </Helmet>
    <HomepageSection>
      <Project project={project} />
    </HomepageSection>
  </Layout>
)

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
