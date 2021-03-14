import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { breakpoints, Heading, Paragraph, ProjectLink } from '../utils/styles'
import { ProjectData } from '../types'

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

function ProjectPreview(props: ProjectData) {
  const { title, description, slug, imageData } = props
  return (
    <Project>
      <Link title={title} to={slug}>
        <StaticImage src="../images/roadmap.png" alt="A roadmap page" />
        {/* <GatsbyImage image={imageData} alt={title} /> */}
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

export { ProjectPreview }
