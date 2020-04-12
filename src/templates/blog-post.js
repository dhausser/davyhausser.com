import React from "react"
import { graphql } from "gatsby"
import { Heading, Flex, Box } from "@chakra-ui/core"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Box mb="6">
        <Heading mb={4}>{post.frontmatter.title}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </Flex>
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
