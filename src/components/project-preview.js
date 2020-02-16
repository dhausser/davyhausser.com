import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, title, description, imageData, index }) => (
  <article className={`style${index + 1}`}>
    <span className="image">
      <Image fluid={imageData} alt={title} />
    </span>
    <Link to={`/${slug}/`}>
      <h2>{title}</h2>
      <div className="content">
        <p>{description}</p>
      </div>
    </Link>
  </article>
)

export default ProjectPreview
