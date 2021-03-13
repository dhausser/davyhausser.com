import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { ProjectData } from "../types"

function ProjectPreview(props: ProjectData) {
  const { title, description, slug, imageData } = props
  return (
    <div className="project-preview">
      <Link to={`/${slug}/`}>
        <Image fluid={imageData} alt={title} />
      </Link>
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p>{description}</p>
      <p>
        <Link to={`/${slug}/`}>View this project &rarr;</Link>
      </p>
    </div>
  )
}

export default ProjectPreview
