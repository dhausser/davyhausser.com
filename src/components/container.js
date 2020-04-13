import React from "react"
import { Stack, Flex } from "@chakra-ui/core"

import Nav from "./nav"
import Footer from "./footer"

const Container = ({ children }) => (
  <>
    <Nav />
    <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          {children}
        </Flex>
      </Stack>
      <Footer />
    </Flex>
  </>
)

export default Container
