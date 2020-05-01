/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"

export default () => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 20px;
          padding: 20px;
        `}
      >
        <h2>Page not found</h2>
        <Link to="/">
          <Button>&larr; Home</Button>
        </Link>
      </div>
    </Layout>
  )
}
