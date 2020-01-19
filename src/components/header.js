import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => (
  <ul
    css={css`
      list-style: none;
      float: right;
    `}
  >
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
)

export default props => (
  <div
    css={css`
      margin: 3rem auto;
      margin-bottom: 1.5rem;
    `}
  >
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3
        css={css`
          display: inline;
        `}
      >
        {props.headerTitle}
      </h3>
    </Link>
    <Nav />
  </div>
)
