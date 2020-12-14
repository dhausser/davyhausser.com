import Typography from "typography";
import {
  colors,
  lineHeights,
  fonts,
} from "gatsby-design-tokens/dist/theme-gatsbyjs-org";

const _options = {
  // typography.js expects an array, theme-ui a CSS prop value
  bodyFontFamily: fonts.system.split(`, `),
  headerFontFamily: fonts.heading.split(`, `),
  baseLineHeight: lineHeights.body,
  headerLineHeight: lineHeights.heading,
  headerColor: colors.heading,
  bodyColor: colors.text,
};

const typography = new Typography(_options);

export const { scale, rhythm, options } = typography;
export default typography;
