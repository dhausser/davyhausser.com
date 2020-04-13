import React from "react"
import { graphql } from "gatsby"
import { Heading, Box } from "@chakra-ui/core"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Box width="700px">
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Box mb="6">
        <Heading mb={4}>{post.frontmatter.title}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </Box>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
