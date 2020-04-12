import React from "react"
import { Box, Text, Heading, Flex, SimpleGrid } from "@chakra-ui/core"
import useInstagram from "../components/instagram"
import IntagramCard from "../components/instagram-card"

export default function Index({ data }) {
  const gramz = useInstagram()
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box mb="6">
        <Heading mb={4}>About</Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum sapiente, suscipit consequatur animi quam quo
          explicabo adipisci natus vero, dolor quaerat. Et cum distinctio
          provident facere dolorem voluptas non.
        </Text>
      </Box>
      <SimpleGrid columns="3" spacing="4" mb="4">
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            <IntagramCard imageUrl={gram.thumbnail} imageAlt={gram.caption} />
          </a>
        ))}
      </SimpleGrid>
    </Flex>
  )
}
