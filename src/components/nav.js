import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default () => (
  <nav
    css={css`
      display: flex;
      justify-content: space-evenly;
      padding: 20px 0;
      background: #fff;
      margin-bottom: 32px;
      align-items: center;
    `}
  >
    <div
      css={css`
        display: inline;
        float: left;
        display: block;
        margin-left: "40px";
        padding: "40px";
      `}
    >
      <Link to="/">Showcase</Link>
    </div>
    <div
      css={css`
        display: inline;
        float: left;
        display: block;
        margin-left: "40px";
        padding: "40px";
      `}
    >
      <Link to="/blog">Blog</Link>
    </div>
    <div
      css={css`
        display: inline;
        float: left;
        display: block;
        margin-left: "40px";
        padding: "40px";
      `}
    >
      <Link to="/store">Store</Link>
    </div>
    <div
      css={css`
        display: inline;
        float: left;
        display: block;
        margin-left: "40px";
        padding: "40px";
      `}
    >
      <Link to="/about">About </Link>
    </div>
  </nav>
)
