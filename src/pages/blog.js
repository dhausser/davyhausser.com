import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text, Heading, Flex, SimpleGrid } from "@chakra-ui/core"
import BlogCard from "../components/blog-card"

export default function Index({ data }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box mb="6">
        <Heading mb={4}>Blog</Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum sapiente, suscipit consequatur animi quam quo
          explicabo adipisci natus vero, dolor quaerat. Et cum distinctio
          provident facere dolorem voluptas non.
        </Text>
      </Box>
      <Heading size="lg">{data.allMarkdownRemark.totalCount} Posts</Heading>
      <SimpleGrid columns="3" spacing={4} mb={4}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id}>
            <BlogCard
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            ></BlogCard>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
