/** @jsx jsx */
import Helmet from "react-helmet"
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
// import Image from "gatsby-image"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

import Layout from "../components/layout"
import Tags from "../components/tags"
import {
  // Post,
  PostThumbnail,
  PostTitle,
  Button,
  NavStyles
} from "../utils/styles"

const Project = ({ title, description, url, repo, imageData, tags }) => (
  <Layout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
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
              rgba(245, 246, 252, 0.52),
              rgba(117, 19, 93, 0.73)
            ), url(${imageData.src})`
        }}
        css={css`
          opacity: 0.65;
          border-radius: 10px;
          transition-timing-function: ease-in-out;
          transition: 1s;
          :hover {
            opacity: 0.9;
            transition-timing-function: ease-in-out;
            transition: 1s;
            transform: scale(0.98, 0.98);
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

export default Project
