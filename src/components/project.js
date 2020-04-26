/** @jsx jsx */
import Helmet from "react-helmet"
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

import Layout from "../components/layout"
import {
  Post,
  PostThumbnail,
  PostTitle,
  Button,
  Navigation
} from "../utils/styles"

const ProjectPreview = ({ title, description, url, repo, imageData, tags }) => {
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
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin: 20px;
        `}
      >
        <p>{description}</p>
        <Navigation>
          <a href={repo}>
            <GoMarkGithub />
          </a>

          <a href={url}>
            <GoLinkExternal />
          </a>
        </Navigation>
      </div>
      <ul>
        <li>
          <a href={url}>View Live &rarr;</a>
        </li>
        <li>
          <a href={repo}>View Code &rarr;</a>
        </li>
      </ul>
      <h3>Tags:</h3>
      <ul>
        {tags.map(tag => (
          <li key={`tag-${tag}`}>{tag}</li>
        ))}
      </ul>
      <Link to="/">
        <Button>&larr; back to all projects</Button>
      </Link>
    </Layout>
  )
}

export default ProjectPreview
