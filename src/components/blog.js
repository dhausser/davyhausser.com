import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 40px 0;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Card = styled('article')`
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

export const PostMeta = styled('div')`
  font-size: 0.8rem;
  color: var(--text - secondary - color);
`

const PostLink = ({ post }) => (
  <Card>
    {/* <Link to={`/blog/${post.frontmatter.path}`}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link> */}
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </h2>
      <PostMeta>{post.frontmatter.date}</PostMeta>
    </header>
  </Card>
)

export default ({ posts, imageData }) => (
  <Grid>
    {posts.map((post) => (
      <PostLink key={post.node.id} post={post.node} imageData={imageData} />
    ))}
  </Grid>
)
