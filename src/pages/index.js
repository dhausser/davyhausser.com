import React from "react"
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
// import GramLink from "../components/gram-link"
import HeroHeader from "../components/heroHeader"
import Messenger from '../components/messenger'
// import { useInstagram } from "../components/instagram"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  // const instagram = useInstagram();
  // const Posts = instagram.map(gram => <GramLink key={gram.id} post={gram.thumbnail} caption={gram.caption} />)

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Messenger>
        <HeroHeader />
        <div className="grids">
          {Posts}
        </div>
        <div style={{ margin: '20px', padding: '20px', justifyContent: "center"  }}>
          <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        </div>
      </Messenger>
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
    }
  }
`