/** @jsx jsx */
import Helmet from "react-helmet"
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

import Layout from "../components/layout"
import Tags from "../components/tags"
import {
  Post,
  // PostThumbnail,
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
    <div>
      <Post>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image fluid={imageData} alt={title} />
          {/* <PostThumbnail style={{ backgroundImage: `url(${imageData.src})` }}>
            <PostTitle>{title}</PostTitle>
          </PostThumbnail> */}
        </a>
      </Post>
    </div>
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
    <PostTitle>{title}</PostTitle>
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
