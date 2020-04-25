import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Card, PostMeta } from "../utils/styles"

const PostLink = ({ title, description, slug, imageData }) => (
  <Card>
    <Link to={`/project/${slug}/`}>
      <div
        css={css`
          background-image: linear-gradient(
              rgba(0, 0, 255, 0.5),
              rgba(255, 255, 0, 0.5)
            ),
            url(${imageData.src});
        `}
      >
        <Image fluid={imageData} alt={title} />
      </div>
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={`/project/${slug}/`} className="post-link">
          {title}
        </Link>
      </h2>
      <PostMeta className="post-meta">{description}</PostMeta>
    </header>
  </Card>
)
export default PostLink
