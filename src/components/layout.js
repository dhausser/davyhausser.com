/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import Navigation from "../components/navigation"
import {
  globalStyles,
  Wrapper,
  Header,
  Title,
  NavStyles
} from "../utils/styles"

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
      <Global styles={globalStyles} />
      <Header>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
        <Navigation />
      </Header>
      {children}
      <footer>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
        >
          {/* <p>
          &copy; 2020 Davy Hausser &bull; Crafted with{" "}
          <span role="img" aria-label="bolt">
            ⚡
          </span>
        </p> */}
          <NavStyles>
            <a href="https://github.com/dhausser">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/davyhausser/">
              <FaLinkedin />
            </a>
          </NavStyles>
        </div>
      </footer>
    </Wrapper>
  )
}
