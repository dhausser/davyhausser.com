import React from "react"
import styled from "@emotion/styled"
import ProjectPreview from "./project-preview"

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 40px 0;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default ({ projects }) => {
  return (
    <Grid>
      {projects.map(({ node: project }) => (
        <ProjectPreview
          key={`preview-${project.slug}`}
          title={project.title}
          description={project.description}
          slug={project.slug}
          tags={project.tags}
          url={project.url}
          repo={project.repo}
          imageData={project.image.childImageSharp.fluid}
        />
      ))}
    </Grid>
  )
}
