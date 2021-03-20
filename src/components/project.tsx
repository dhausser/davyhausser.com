import * as React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ProjectData } from 'types'

function Project(props: ProjectData) {
  const { title, description, url, tags, repository, author } = props
  const image = getImage(props.image) as IGatsbyImageData
  return (
    <div>
      <div className="full-height">
        <div className="heading-wrap-content">
          <div className="heading-main">
            <span>{title}</span>
            <br />
            <br />
          </div>
        </div>
        <GatsbyImage image={image} alt={title} />
        <div className="link-row">
          <a href={url} title="Live" target="_blank" rel="noopener noreferrer">
            <div className="project-link">
              Live <span>&#8250;</span>
            </div>
          </a>
          <a
            href={repository}
            title="Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-link">
              Code <span>&#8250;</span>
            </div>
          </a>
        </div>
        <p>{description}</p>
        <ul>
          {tags.map((tag: string) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p>Build by: {author}</p>
      </div>
    </div>
  )
}

export default Project
