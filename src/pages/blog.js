import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import BlogCard from "../components/blog-card"

export default function Index({ data }) {
  return (
    <div
      css={css`
        display: block;
      `}
    >
      <heading>Blog</heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        earum sapiente, suscipit consequatur animi quam quo explicabo adipisci
        natus vero, dolor quaerat. Et cum distinctio provident facere dolorem
        voluptas non.
      </p>
      <heading>{data.allMarkdownRemark.totalCount} Posts</heading>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 32px;
          margin-top: 32px;

          @media only screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
          }

          @media only screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          ></BlogCard>
        ))}
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
