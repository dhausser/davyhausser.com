import React from "react"
import { Link } from "gatsby"
import { Badge, Box, Image } from "@chakra-ui/core"

export default function Card({ title, date, excerpt, slug }) {
  const property = {
    imageUrl: `https://bit.ly/2Z4KKcF`,
    imageAlt: `Rear view of modern home with pool`,
  }

  return (
    <Box borderWidth="1px" rounded="lg" overflow="hidden" minwW="300px">
      <Link to={slug}>
        <Image src={property.imageUrl} alt={property.imageAlt} />
      </Link>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {date}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Link to={slug}>{title}</Link>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm" isTruncated>
            {excerpt}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
