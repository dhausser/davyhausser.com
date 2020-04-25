/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const GlobalStyles = () => (
  <Global styles={css`
    div {
      background: white;
    }
  `} />
)

const Wrapper = styled("div")`
  padding: 32px;
  max-width: 1140px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`;

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background: var(--site-header);
  margin-bottom: 32px;
  align-items: center;
`;

const Title = styled("div")`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
`;

const Footer = styled("footer")`
  text-align: center;
  margin: 90px 0 16px;
  color: #666;
  a {
    font-weight: 700;
  }
`;

export {
  GlobalStyles,
  Wrapper,
  Header,
  Title,
  Footer
}