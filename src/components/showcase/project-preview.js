/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

import Tags from "../tags"
import { NavStyles } from "../../utils/styles"

export const Card = styled("article")`
  display: grid;
  background-color: var(--card-bg);
  border-radius: 2px;
  border: 1px solid var(--card-bdr);
  box-shadow: 0 0 30px var(--card-shadow);
  overflow: hidden;
  line-height: 1.5;
  &:hover .post-link {
    color: var(--primary-color);
  }
  > a img {
    display: block;
  }
  > header {
    padding: 24px;
  }
  > h2:first-of-type {
    margin: 0 0 0.5rem 0;
  }
  .post-title {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  .post-meta {
    font-weight: 100;
    margin-bottom: 0;
  }
  .post-link {
    color: var(--text-color);
    text-decoration: none;
  }
`

export const PostMeta = styled("div")`
  font-size: 0.8rem;
  color: var(--text - secondary - color);
`

const PostTitle = styled("h1")`
  margin: 0 0 0.5rem;
  line-height: 1.3;
  font-size: 2rem;
`

const overlayStyles = css`
  text-align: center;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  color: var(--featured-text);
  display: grid;
  align-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 2px;

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-color: #008cba; */
    overflow: hidden;
    width: 100%;
    height: 0;
    /* transition: 0.5s ease; */
    opacity: 0;
    background: rgba(0, 0, 0, 0.3);
    /* background: linear-gradient(
    to bottom,
    rgba(234, 230, 255, 0),
    rgba(64, 50, 148, 0.52)
  ); */
    :hover {
      opacity: 1;
    }
  }

  /* transition-timing-function: ease-in-out; */
  /* transition: 1s; */
  :hover .overlay {
    height: 100%;
    /* transition-timing-function: ease-in-out; */
    /* transition: 1s; */
    /* transform: scale(0.98, 0.98); */
  }
`

const overlayTransform = css`
  color: white;
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

export default ({ title, tags, slug, url, repo, imageData }) => {
  return (
    <Card>
      <Link to={`/project/${slug}/`}>
        <div
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(234, 230, 255, 0.20),
              rgba(64, 50, 148, 0.80)
            ), url(${imageData.src})`
          }}
          css={overlayStyles}
        >
          <div className="overlay">
            <div css={overlayTransform}>
              <PostTitle>{title}</PostTitle>
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                <Tags tags={tags} />
              </div>
            </div>
          </div>
          <Img fluid={imageData} alt={title} />
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
