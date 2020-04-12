import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ title, description, slug, url, imageData, tags }) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <div
      css={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-evenly`,
      }}
    >
      <div css={{ alignSelf: `center` }}>
        <a href={url}>View Online &rarr;</a>
      </div>
      <div css={{ alignSelf: `center` }}>
        <a href={`https://github.com/dhausser/${slug}`}>
          View Code &rarr;
          <Image fluid={`../images/github.png`}></Image>
        </a>
      </div>
    </div>
    <p>{description}</p>
    <h3>Tags:</h3>
    <ul>
      {tags.map(tag => (
        <li key={`tag-${tag}`}>{tag}</li>
      ))}
    </ul>
    <p>
      <Link to="/">&larr; Back to all projects</Link>
    </p>
  </div>
)

export default ProjectPreview
