import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Post, PostThumbnail, PostTitle, Button } from "../utils/styles"

const ProjectPreview = ({ title, description, url, imageData, tags }) => {
  console.log(imageData)
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div>
        <Post>
          <PostThumbnail style={{ backgroundImage: `url(${imageData.src})` }}>
            <PostTitle>{title}</PostTitle>
          </PostThumbnail>
        </Post>
      </div>
      <PostTitle>{title}</PostTitle>
      <p>{description}</p>
      <ul>
        <li>
          <a href={url}>View Live &rarr;</a>
        </li>
        <li>
          <a href={`https://github.com/dhausser`}>View Code &rarr;</a>
        </li>
      </ul>
      <h3>Tags:</h3>
      <ul>
        {tags.map(tag => (
          <li key={`tag-${tag}`}>{tag}</li>
        ))}
      </ul>
      <Link to="/">
        <Button className="-primary">&larr; back to all projects</Button>
      </Link>
    </Layout>
  )
}

export default ProjectPreview
