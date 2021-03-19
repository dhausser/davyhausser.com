import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ProjectData } from 'types'

function ProjectPreview(props: Omit<ProjectData, 'tags' | 'repository'>) {
  const { title, description, slug } = props
  const image = getImage(props.image) as IGatsbyImageData
  return (
    <div className="project">
      <Link title={title} to={slug}>
        <GatsbyImage image={image} alt={title} />
      </Link>
      <Link title={title} to={slug}>
        <h1 className="subheading">{title}</h1>
      </Link>
      <p className="project-paragraph">{description}</p>
      <Link title={title} to={slug}>
        <p className="project-link">
          View Project <span>&#8250;</span>
        </p>
      </Link>
    </div>
  )
}

export default ProjectPreview
