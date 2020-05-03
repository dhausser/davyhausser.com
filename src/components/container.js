import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"

const Container = styled(`div`)`
  background: ${p => p.theme.colors.newsletter.background};
  border: 1px solid ${p => p.theme.colors.newsletter.border};
  border-radius: ${p => p.theme.radii[2]};
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[8]};
  padding: calc(${p => p.theme.space[8]} * 1.2);
  padding-bottom: calc(${props => rhythm(props.theme.space[8] * 1.2)});
  position: relative;

  ${mediaQueries.lg} {
    flex-direction: row;
    justify-content: space-between;

    > * {
      flex-basis: 50%;
    }
  }
`

export default Container
