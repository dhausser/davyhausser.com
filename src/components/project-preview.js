/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
// import Image from "gatsby-image"

import Tags from "../components/tags"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"
import {
  NavStyles,
  Card,
  PostMeta
  // PostThumbnail,
  // PostTitle
} from "../utils/styles"

const ProjectPreview = ({ title, tags, slug, url, repo, imageData }) => {
  return (
    <Card>
      <Link to={`/project/${slug}/`}>
        <div
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(245, 246, 252, 0.52),
              rgba(117, 19, 93, 0.73)
            ), url(${imageData.src})`
          }}
          css={css`
            text-align: center;
            min-height: 300px;
            background-size: cover;
            background-position: center;
            color: var(--featured-text);
            display: grid;
            align-content: center;
            position: relative;
            padding: 18px;
            overflow: hidden;
            border-radius: 10px;

            opacity: 0.5;
            transition-timing-function: ease-in-out;
            transition: 1s;
            :hover {
              opacity: 1;
              transition-timing-function: ease-in-out;
              transition: 1s;
              transform: scale(0.98, 0.98);
            }
          `}
        >
          {/* <PostTitle>{title}</PostTitle> */}
          {/* <Image fluid={imageData} alt={title} /> */}
        </div>
      </Link>
      <header>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h3 className="post-title">
            <Link to={`/project/${slug}/`} className="post-link">
              {title}
            </Link>
          </h3>
          <NavStyles>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <GoMarkGithub />
            </a>

            <a href={url} target="_blank" rel="noopener noreferrer">
              <GoLinkExternal />
            </a>
          </NavStyles>
        </div>
        <PostMeta className="post-meta">
          <Tags tags={tags} />
        </PostMeta>
      </header>
    </Card>
  )
}

export default ProjectPreview
