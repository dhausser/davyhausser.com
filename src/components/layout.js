import React from "react"
import { Global, css } from "@emotion/core"

import { Link, useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import 'prismjs/themes/prism-okaidia.css';

import Navigation from "../components/navigation"
import { GlobalStyles, Wrapper, Header, Title, Footer } from "../styles/globalStyles"

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
      <GlobalStyles />
      <Header>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
        <Navigation />
      </Header>
      {children}
      <Footer>
        <div css={
          css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            `}>
          <p>&copy; 2020 Davy Hausser &bull; Crafted with <span role="img" aria-label="bolt">⚡</span></p>
          <div css={css`margin: 0 .5em 0 .5em;`}>
            <a href="https://github.com/dhausser"><FaGithub /></a>
          </div>
          <div css={css`margin: 0 .5em 0 .5em;`}>
            <a href="https://www.linkedin.com/in/davyhausser/"><FaLinkedin /></a>
          </div>
        </div>
      </Footer>
    </Wrapper>
  )
}