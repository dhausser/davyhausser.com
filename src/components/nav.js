import React from "react"
import { Link } from "gatsby"
import { useColorMode, Flex, Button, Box, IconButton } from "@chakra-ui/core"
import styled from "@emotion/styled"

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
`

export default () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      as="nav"
      p={8}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === `dark` ? `sun` : `moon`}
        onClick={toggleColorMode}
      />
      <Box>
        <Link to="/">
          <Button as="a" variant="ghost" p={[1, 4]}>
            Showcase
          </Button>
        </Link>
        <Link to="/blog">
          <Button as="a" variant="ghost" p={[1, 4]}>
            Blog
          </Button>
        </Link>
        <Link to="/store">
          <Button as="a" variant="ghost" p={[1, 4]}>
            Store
          </Button>
        </Link>
        <Link to="/about">
          <Button as="a" variant="ghost" p={[1, 4]}>
            About
          </Button>
        </Link>
      </Box>
    </StickyNav>
  )
}
