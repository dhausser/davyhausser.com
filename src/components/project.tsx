import React from "react"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import styled from "@emotion/styled"
import { breakpoints, Heading, Paragraph, ProjectLink } from "../utils/styles"

interface Props {
  fluidImg: FluidObject | FluidObject[]
}

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

function ProjectRow({ fluidImg }: Props): JSX.Element {
  return (
    <Project>
      <Link title="Wanderlost" to="/wanderlost">
        <Img fluid={fluidImg} />
      </Link>
      <Link title="Wanderlost" to="/wanderlost">
        <SubHeading>Wanderlost</SubHeading>
      </Link>
      <ProjectParagraph>
        An ecommerce experiement about experiences and discovery.
      </ProjectParagraph>
      <Link title="Wanderlost" to="/wanderlost">
        <ProjectLink>
          View Project <span>&#8250;</span>
        </ProjectLink>
      </Link>
    </Project>
  )
}

export default ProjectRow
