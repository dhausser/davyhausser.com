import "./layout.css"

import React from "react"
// import { Link } from "gatsby"
import { css } from "@emotion/core"
// import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

// const Header = ({ title }) => (
//   <Link to={`/`}>
//     <h3
//       css={css`
//         margin-bottom: ${rhythm(2)};
//         display: inline-block;
//         font-style: normal;
//       `}
//     >
//       {title}
//     </h3>
//   </Link>
// )

export default ({ children }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      {/* <Header title={data.site.siteMetadata.title} /> */}
      {children}
    </div>
  )
}
