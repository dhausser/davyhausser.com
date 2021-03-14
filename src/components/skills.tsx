import React from 'react'
import {
  Heading,
  Container,
  SubContainer,
  SkillTable,
  TextContent,
  SkillContent,
  Paragraph,
} from '../utils/styles'

function Skills() {
  return (
    <Container>
      <SubContainer>
        <SkillContent>
          <TextContent>
            <Heading>Skills</Heading>
            <Paragraph>
              Through my self teching journey and experience, I&apos;ve gained a
              solid understanding of computer science and web development
              concepts, and have dedicated a lot of my free time to apply these
              concepts to real-world scenarios and applications.
            </Paragraph>
          </TextContent>
          <SkillTable>
            <div>
              <Paragraph>
                <span>&#9675;</span> JavaScript
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> TypeScript
              </Paragraph>
            </div>
            <div>
              <Paragraph>
                <span>&#9675;</span> React
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> HTML & CSS
              </Paragraph>
            </div>
            <div>
              <Paragraph>
                <span>&#9675;</span> GraphQL
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> Node.js
              </Paragraph>
            </div>
            <div>
              <Paragraph>
                <span>&#9675;</span> Git
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> SQL & MongoDB
              </Paragraph>
            </div>
          </SkillTable>
        </SkillContent>
      </SubContainer>
    </Container>
  )
}

export default Skills
