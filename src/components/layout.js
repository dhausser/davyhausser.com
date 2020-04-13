import React from "react"
import { Stack } from "@chakra-ui/core"

import SEO from "../components/seo"
import Container from "../components/container"

export default function Layout({ children }) {
  return (
    <Container>
      <SEO />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        {children}
      </Stack>
    </Container>
  )
}
