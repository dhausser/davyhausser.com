import React from "react"
import { css } from "@emotion/core"
import { Box, Text, Heading } from "@chakra-ui/core"

import useInstagram from "../components/instagram"
import IntagramCard from "../components/instagram-card"

export default function Index({ data }) {
  const gramz = useInstagram()
  return (
    <>
      <Box mb="6">
        <Heading mb={4}>About</Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum sapiente, suscipit consequatur animi quam quo
          explicabo adipisci natus vero, dolor quaerat. Et cum distinctio
          provident facere dolorem voluptas non.
        </Text>
      </Box>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 32px;
          margin-top: 32px;

          @media only screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
          }

          @media only screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
        `}
      >
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            <IntagramCard imageUrl={gram.thumbnail} imageAlt={gram.caption} />
          </a>
        ))}
      </div>
    </>
  )
}
