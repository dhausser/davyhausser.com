import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { Button, Badge, Box, Flex, IconButton, Icon } from "@chakra-ui/core"

const ProjectCard = ({ slug, title, description, image, tags, url }) => (
  <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
    <Link to={`/${slug}`}>
      <Image fluid={image.childImageSharp.fluid} alt={title} />
    </Link>

    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Badge rounded="full" px="2" variantColor="teal">
          {tags[0]}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {tags[1]} &bull; {tags[2]}
        </Box>
      </Box>

      <Flex justifyContent="space-between" alignItems="baseline">
        <Link to={`/${slug}`}>
          <Button as="a" variant="ghost" p={[1, 4]}>
            {title}
          </Button>
        </Link>
        <Box>
          <a
            href={`https://github.com/dhausser/${slug}`}
            title="GitHub"
            isExternal
          >
            <IconButton
              aria-label="GitHub"
              icon="github"
              size="lg"
              color="gray.500"
              variant="ghost"
            />
          </a>
          <a href={url}>
            <Icon name="external-link" mx={2} />
          </a>
        </Box>
      </Flex>

      <Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {description}
        </Box>
      </Box>
    </Box>
  </Box>
)

export default ProjectCard
