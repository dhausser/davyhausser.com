import React from 'react'
import { Container, TextContentWrap, Paragraph } from '../utils/styles'

function About() {
  return (
    <Container
      style={{
        alignItems: 'start',
        margin: 0,
        justifyContent: 'space-between',
      }}
    >
      <TextContentWrap>
        <Paragraph>
          I&apos;m an experienced product manager and engineer with a passion
          for innovation and technology.
        </Paragraph>
      </TextContentWrap>
    </Container>
  )
}

export default About
