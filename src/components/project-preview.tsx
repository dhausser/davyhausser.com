import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { breakpoints, Heading, Paragraph, ProjectLink } from 'utils/styles'
import { ProjectData } from 'types'

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;
`

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
`

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`

function ProjectPreview(props: Omit<ProjectData, 'tags' | 'repository'>) {
  const { title, description, slug } = props
  const image = getImage(props.image) as IGatsbyImageData
  return (
    <Project>
      <Link title={title} to={slug}>
        <GatsbyImage image={image} alt={title} />
      </Link>
      <Link title={title} to={slug}>
        <SubHeading>{title}</SubHeading>
      </Link>
      <ProjectParagraph>{description}</ProjectParagraph>
      <Link title={title} to={slug}>
        <ProjectLink>
          View Project <span>&#8250;</span>
        </ProjectLink>
      </Link>
    </Project>
  )
}

export default ProjectPreview
