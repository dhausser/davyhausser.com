import React from "react"
import { graphql } from "gatsby"
import { Box, Text, Heading } from "@chakra-ui/core"
import CardGrid from "../components/card-grid"
import BlogCard from "../components/blog-card"

export default function Index({ data }) {
  return (
    <>
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
      <CardGrid columns={[1, 1, 2]} spacing={4} mb={4}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          ></BlogCard>
        ))}
      </CardGrid>
    </>
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
