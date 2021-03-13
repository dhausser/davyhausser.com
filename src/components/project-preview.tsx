import React from "react"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import styled from "@emotion/styled"
import { breakpoints, Heading, Paragraph, ProjectLink } from "../utils/styles"
import { ProjectData } from "../types"

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

function ProjectRow(props: ProjectData): JSX.Element {
  const { key, title, description, slug, imageData } = props
  return (
    <Project>
      <Link title={title} to={slug}>
        <Img fluid={imageData} />
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

export default ProjectRow

// import React from "react"
// import { Link } from "gatsby"
// import Image from "gatsby-image"
// import { ProjectData } from "../types"

// function ProjectPreview(props: ProjectData) {
//   const { title, description, slug, imageData } = props
//   return (
//     <div className="project-preview">
//       <Link to={`/${slug}/`}>
//         <Image fluid={imageData} alt={title} />
//       </Link>
//       <h2>
//         <Link to={`/${slug}/`}>{title}</Link>
//       </h2>
//       <p>{description}</p>
//       <p>
//         <Link to={`/${slug}/`}>View this project &rarr;</Link>
//       </p>
//     </div>
//   )
// }

// export default ProjectPreview
