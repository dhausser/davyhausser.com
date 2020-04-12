import React from "react"
import { graphql } from "gatsby"

import { Heading, Flex, Box, Text } from "@chakra-ui/core"

import Checkout from "../components/checkout"

export default ({ data }) => (
  <Flex
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="flex-start"
  >
    <Box mb="6">
      <Heading mb={4}>Modern online payments with Stripe Checkout</Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        earum sapiente, suscipit consequatur animi quam quo explicabo adipisci
        natus vero, dolor quaerat. Et cum distinctio provident facere dolorem
        voluptas non.
      </Text>
      <Flex flexDirection="row" justifyContent="center">
        <Checkout />
      </Flex>
    </Box>
  </Flex>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
