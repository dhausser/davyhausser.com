import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Card = styled("article")`
  display: grid;
  background-color: var(--card-bg);
  border-radius: 9px;
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
  > h2:first-child {
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

const PostLink = ({ post, childImageSharp }) => (
  <Card>
    <Link to={post.frontmatter.path}>
      <Img fluid={childImageSharp.fluid} alt={"stars in space"} />
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <PostMeta className="post-meta">{post.frontmatter.date}</PostMeta>
    </header>
  </Card>
)
export default PostLink
