/** @jsx jsx */
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby'
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import PostLink from "../components/postLink"
import HeroHeader from "../components/heroHeader"
import Instagram from "../components/instagram"
import { Grid, Button } from "../utils/styles"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
    file,
  },
}) => {
  const Posts = edges
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
    }
  }
`