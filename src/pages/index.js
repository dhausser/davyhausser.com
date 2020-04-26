/** @jsx jsx */
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import { Grid, Button } from "../utils/styles"

const IndexPage = ({ data: { site, allProjectsJson } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Grid>
        {allProjectsJson.edges.map(({ node: project }) => (
          <ProjectPreview
            key={`preview-${project.slug}`}
            title={project.title}
            description={project.description}
            slug={project.slug}
            url={project.url}
            repo={project.repo}
            imageData={project.image.childImageSharp.fluid}
          />
        ))}
      </Grid>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 40px;
          padding: 40px;
        `}
      >
        <Link to="/contact">
          <Button>Get in touch &rarr;</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
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
          url
          repo
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
