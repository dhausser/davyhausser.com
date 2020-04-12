import React from "react"
import { Badge, Box, Image } from "@chakra-ui/core"

export default function Card({ title, date, excerpt }) {
  const property = {
    imageUrl: `https://bit.ly/2Z4KKcF`,
    imageAlt: `Rear view of modern home with pool`,
    beds: 3,
    baths: 2,
    title: `Modern home in city center in the heart of historic Los Angeles`,
    formattedPrice: `$1,900.00`,
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

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
            5 min read
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {/* {Array(5)
            .fill(``)
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? `teal.500` : `gray.300`}
              />
            ))} */}
          <Box as="span" color="gray.600" fontSize="sm" isTruncated>
            {excerpt}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
