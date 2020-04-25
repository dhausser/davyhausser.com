/** @jsx jsx */
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby'
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import PostLink from "../components/post-link"
import HeroHeader from "../components/hero-header"
import Instagram from "../components/instagram"
import { Grid, Button } from "../utils/styles"

const IndexPage = ({
  data: {
    site,
    allProjectsJson,
    allMarkdownRemark,
    file,
  },
}) => {
  console.log(allProjectsJson)

  const Posts = allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} childImageSharp={file.childImageSharp} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <Grid>
        {allProjectsJson.edges.map(({ node: project }) => (
          <ProjectPreview
            key={`preview${project.slug}`}
            title={project.title}
            description={project.description}
            slug={project.slug}
            imageData={project.image.childImageSharp.fluid}
          />
        ))}
        {Posts}
        <Instagram />
      </Grid>
      <div css={
        css`
          display: flex;
          justify-content: center;
          margin: 40px;
          padding: 40px;
      `}>
        <Link to='/contact' >
          <Button className="-primary">Get in touch &rarr;</Button>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    },
    file(relativePath: { eq: "image-5.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
