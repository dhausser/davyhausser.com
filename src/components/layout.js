/** @jsx jsx */
import { Global, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"

import { globalStyles } from "../utils/styles"
import Navigation from "./navigation"
import Footer from "./footer"

const Wrapper = styled("div")`
  padding: 32px;
  max-width: 1140px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background: var(--site-header);
  margin-bottom: 32px;
  align-items: center;
`

const Title = styled("div")`
  text-decoration: none;
  font-weight: 600;
  text-transform: lowercase;
  a {
    color: #888;
    text-decoration: none;
    &:hover {
      color: var(--primary-color);
    }
  }
`

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
    <Wrapper>
      {/* <Global styles={globalStyles} /> */}
      <Header>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
        <Navigation />
      </Header>
      {children}
      {/* <Footer /> */}
    </Wrapper>
  )
}
