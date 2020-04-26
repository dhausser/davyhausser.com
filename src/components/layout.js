/** @jsx jsx */
import { Global, jsx } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { globalStyles, Wrapper, Header, Title } from "../utils/styles"

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
      <Footer />
    </Wrapper>
  )
}
