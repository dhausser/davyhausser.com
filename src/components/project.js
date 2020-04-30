/** @jsx jsx */
import Helmet from "react-helmet"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
// import Image from "gatsby-image"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

import Layout from "./layout"
import Tags from "./tags"
import { NavStyles } from "./navigation"

const PostThumbnail = styled("div")`
  text-align: center;
  min-height: 380px;
  background-color: var(--featured-bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  color: var(--featured-text);
  display: grid;
  align-content: center;
  position: relative;
  padding: 18px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
  .post-meta {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0;
  }
`

const PostTitle = styled("h1")`
  margin: 0 0 0.5rem;
  line-height: 1.3;
  font-size: 2rem;
`

const Button = styled("div")`
  width: 100%;
  padding: 18px 27px;
  display: inline-block;
  background: var(--btn-bg);
  border: 1px solid var(--btn-bdr);
  border-radius: 9px;
  text-decoration: none;
  color: var(--btn-text-color);
  font-size: 16px;
  font-weight: 400;
  transition: background-color 0.3s linear;
  &.-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-text-color);
    &:hover {
      background-color: var(--secondary-color);
      color: var(--primary-text-color);
      text-decoration: none;
    }
  }
  &:hover {
    background-color: var(--btn-hover-bg);
    color: var(--btn-hover-text-color);
  }
`

export default ({ title, description, url, repo, imageData, tags }) => (
  <Layout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {/* <PostTitle>{title}</PostTitle> */}
    <a href={url} target="_blank" rel="noopener noreferrer">
      {/* <Image
        fluid={imageData}
        alt={title}
        css={css`
          opacity: 0.5;
          border-radius: 10px;
          transition-timing-function: ease-in-out;
          transition: 1s;
          :hover {
            opacity: 0.8;
            transition-timing-function: ease-in-out;
            transition: 1s;
            transform: scale(1.02, 1.02);
          }
        `}
      /> */}

      <PostThumbnail
        style={{
          backgroundImage: `linear-gradient(
              to bottom,
              rgba(234, 230, 255, 0.20),
              rgba(64, 50, 148, 0.80)
            ), url(${imageData.src})`
        }}
        css={css`
          opacity: 0.9;
          transition-timing-function: ease-in-out;
          transition: 1s;
          :hover {
            opacity: 1;
            transition-timing-function: ease-in-out;
            transition: 1s;
            transform: scale(0.99, 0.99);
          }
        `}
      >
        <PostTitle>{title}</PostTitle>
      </PostThumbnail>
    </a>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 20px 0px;
      `}
    >
      <Tags tags={tags} />
      <NavStyles>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <GoMarkGithub />
        </a>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <GoLinkExternal />
        </a>
      </NavStyles>
    </div>
    {/* <PostTitle>{title}</PostTitle> */}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nam non
      consectetur voluptatem eveniet perferendis! Nisi fugit asperiores quo
      aliquam quidem, eos assumenda quod architecto in earum nostrum amet
      aspernatur.
    </p>
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 20px;
        padding: 20px;
      `}
    >
      <div
        css={css`
          margin: 0px 10px;
        `}
      >
        <Link to="/">
          <Button>&larr; Home</Button>
        </Link>
      </div>
      <div
        css={css`
          margin: 0px 10px;
        `}
      >
        <Link to="/contact">
          <Button>Contact &rarr;</Button>
        </Link>
      </div>
    </div>
  </Layout>
)
