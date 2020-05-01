import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"

import {
  colors,
  space,
  transition,
  radii,
  fontSizes,
  fontWeights,
  fonts
} from "gatsby-design-tokens/dist/theme-gatsbyjs-org"

const stripeAnimation = keyframes({
  "0%": { backgroundPosition: `0 0` },
  "100%": { backgroundPosition: `${space[7]} ${space[11]}` }
})

export const focusStyle = {
  outline: 0,
  boxShadow: `0 0 0 2px ${colors.input.focusBoxShadow}`
}

export const NavStyles = styled("nav")`
  display: flex;
  align-items: center;
  font-weight: 400;
  text-transform: lowercase;
  a {
    color: #888;
    text-decoration: none;
    margin: 0 8px 0;
    &[aria-current] {
      color: var(--primary-color);
      font-weight: 600;
    }
    &:hover {
      color: var(--primary-color);
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

export const blogWidth = `42rem`

export const breakpointGutter = `@media (min-width: ${blogWidth})`

export const buttonStyles = t => {
  return {
    default: {
      alignItems: `center`,
      backgroundColor: `button.primaryBg`,
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: `solid`,
      borderColor: `button.primaryBorder`,
      color: `button.primaryText`,
      cursor: `pointer`,
      display: `inline-flex`,
      fontFamily: `heading`,
      fontWeight: `bold`,
      flexShrink: 0,
      lineHeight: `solid`,
      textDecoration: `none`,
      whiteSpace: `nowrap`,
      px: 3,
      height: `36px`,
      backgroundSize: t => `${t.space[7]} ${t.space[7]}`,
      transition: t => `all ${t.transition.default}`,
      ":hover, :focus": {
        backgroundColor: `gatsby`,
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)`,
        color: colors.white,
        animation: `${stripeAnimation} 2.8s linear infinite`,
        borderColor: `gatsby`
      },
      ":focus": { ...focusStyle },
      ":after": { content: `''`, display: `block` },
      "& svg": { marginLeft: `.2em` }
    },
    secondary: {
      borderColor: `button.secondaryBorder`,
      backgroundColor: `button.secondaryBg`,
      color: `button.secondaryText`,
      fontWeight: `body`
    }
  }
}

export const svgStyles = t => {
  return {
    stroke: {
      "& .svg-stroke": {
        strokeMiterlimit: 10,
        strokeWidth: 1.5
      }
    },
    default: {
      "& .svg-stroke-dark": { stroke: `icon.neutral` },
      "& .svg-stroke-accent": { stroke: `icon.neutralLight` },
      "& .svg-stroke-background": { stroke: `icon.background` },
      "& .svg-stroke-light": { stroke: `icon.light` },
      "& .svg-fill-dark": { fill: `icon.neutral` },
      "& .svg-fill-accent": { fill: `icon.neutralLight` },
      "& .svg-fill-background": { fill: `icon.background` },
      "& .svg-fill-light": { fill: `icon.light` },
      "& .svg-fill-accent.svg-fill-transparent": { fill: `transparent` },
      "& .svg-fill-light.svg-fill-transparent": { fill: `transparent` }
    },
    active: {
      "& .svg-stroke-dark": { stroke: `icon.dark` },
      "& .svg-stroke-accent": { stroke: `icon.accent` },
      "& .svg-stroke-background": { stroke: `icon.background` },
      "& .svg-stroke-light": { stroke: `icon.light` },
      "& .svg-fill-dark": { fill: `icon.dark` },
      "& .svg-fill-accent": { fill: `icon.accent` },
      "& .svg-fill-background": { fill: `icon.background` },
      "& .svg-fill-light": { fill: `icon.lightActive` },
      "& .svg-fill-accent.svg-fill-transparent": { fill: `icon.accent` },
      "& .svg-fill-light.svg-fill-transparent": { fill: `icon.lightActive` }
    }
  }
}
