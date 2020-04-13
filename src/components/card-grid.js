import React from "react"
import { Flex, SimpleGrid } from "@chakra-ui/core"

export default function CardGrid({ children }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
        {children}
      </SimpleGrid>
    </Flex>
  )
}
