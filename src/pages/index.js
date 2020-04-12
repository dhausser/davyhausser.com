import React from "react"
import { graphql } from "gatsby"

import { Box, Text, Heading, Flex, SimpleGrid } from "@chakra-ui/core"

import ProjectCard from "../components/project-card"
import IntagramCard from "../components/instagram-card"
import useInstagram from "../components/instagram"
import Card from "../components/card"

export default function Index({ data }) {
  const gramz = useInstagram()
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box mb="6">
        <Heading mb="4">Showcase</Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum sapiente, suscipit consequatur animi quam quo
          explicabo adipisci natus vero, dolor quaerat. Et cum distinctio
          provident facere dolorem voluptas non.
        </Text>
      </Box>
      <SimpleGrid columns="3" spacing="4" mb="4">
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            tags={project.tags}
            url={project.url}
          />
        ))}
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            <IntagramCard imageUrl={gram.thumbnail} imageAlt={gram.caption} />
          </a>
        ))}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Flex>
  )
}

export const allProjectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          url
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
