import "./layout.css"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-left: 1rem;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ title }) => (
  <div
    css={css`
      overflow: hidden;
    `}
  >
    <Link
      to={`/`}
      css={css`
        text-decoration: none;
      `}
    >
      {title}
    </Link>
    <ul
      css={css`
        list-style: none;
        float: right;
        text-decoration: none;
      `}
    >
      <ListLink to="/store">Store</ListLink>
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </div>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 5rem auto;
        max-width: 90%;
        width: 57ch;
      `}
    >
      <Header title={data.site.siteMetadata.title} />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {children}
      </div>
    </div>
  )
}
