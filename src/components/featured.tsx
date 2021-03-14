import React from 'react'
import { ProjectPreview } from 'components'
import {
  Container,
  SubContainer,
  TextContent,
  Heading,
  Paragraph,
} from 'utils/styles'
import { ProjectData } from 'types'

interface Props {
  projects: Array<{ node: ProjectData }>
}

function Featured({ projects }: Props) {
  return (
    <Container>
      <SubContainer>
        <TextContent>
          <Heading>Work</Heading>
          <Paragraph>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I&apos;ve
            dedicated my time to.
          </Paragraph>
        </TextContent>
      </SubContainer>
      <SubContainer>
        {projects.map(({ node: project }) => (
          <ProjectPreview
            key={`preview-${project.slug}`}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            url={project.url}
          />
        ))}
      </SubContainer>
    </Container>
  )
}

export default Featured
