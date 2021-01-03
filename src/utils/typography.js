import Typography from 'typography'
import * as theme from 'gatsby-design-tokens/dist/theme-gatsbyjs-org'

const _options = {
  bodyFontFamily: theme.fonts.system.split(`, `),
  headerFontFamily: theme.fonts.heading.split(`, `),
  baseLineHeight: theme.lineHeights.body,
  headerLineHeight: theme.lineHeights.heading,
  headerColor: theme.colors.heading,
  bodyColor: theme.colors.text,
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography
export default typography
