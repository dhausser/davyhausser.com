import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org";

export const globalStyles = (t) => {
  return {
    ...gatsbyHighlight(t),
    ...gatsbyHighlightLanguageBadges(t),
    "html, body": {
      color: t.colors.text,
      MozOsxFontSmoothing: `grayscale`,
      textRendering: `optimizelegibility`,
      WebkitFontSmoothing: `antialiased`,
    },
    a: {
      textDecoration: `none`,
    },
    h1: {
      fontWeight: t.fontWeights.extraBold,
    },
    "h1, h2, h3, h4, h5, h6": {
      color: t.colors.heading,
      letterSpacing: t.letterSpacings.tight,
    },
    h2: {
      marginTop: t.space[9],
    },
    h3: {
      marginTop: t.space[9],
    },
    "h4, h5, h6": { fontSize: t.fontSizes[3] },
    "h5, h6": { fontWeight: t.fontWeights.body },
    h6: { fontSize: t.fontSizes[2] },
    blockquote: {
      paddingLeft: t.space[6],
      marginLeft: 0,
      borderLeft: `${t.space[1]} solid ${t.colors.ui.border}`,
    },
    hr: {
      backgroundColor: t.colors.ui.border,
    },
    iframe: {
      border: 0,
    },
    "th, td": {
      borderColor: t.colors.ui.border,
    },
    "tt, code, kbd, samp": {
      // reset line-height set by
      // https://github.com/KyleAMathews/typography.js/blob/3c99e905414d19cda124a7baabeb7a99295fec79/packages/typography/src/utils/createStyles.js#L198
      lineHeight: `inherit`,
    },
    "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
      fontWeight: t.fontWeights.body,
      fontSize: `82.5%`,
    },
    "tt, code, kbd": {
      background: t.colors.code.bgInline,
      paddingTop: `0.2em`,
      paddingBottom: `0.2em`,
    },
    "tt, code, kbd, .gatsby-code-title": {
      fontFamily: t.fonts.monospace,
      fontSize: `90%`,
      // Disable ligatures as they look funny as code.
      fontVariant: `none`,
      WebkitFontFeatureSettings: `"clig" 0, "calt" 0`,
      fontFeatureSettings: `"clig" 0, "calt" 0`,
    },
    // Target image captions.
    // This is kind of a fragile selector...
    ".gatsby-resp-image-link + em, .gatsby-resp-image-wrapper + em": {
      fontSize: t.fontSizes[1],
      lineHeight: t.lineHeights.dense,
      paddingTop: t.space[2],
      marginBottom: t.space[9],
      display: `block`,
      fontStyle: `normal`,
      color: t.colors.textMuted,
      position: `relative`,
    },
    ".gatsby-resp-image-link + em a, .gatsby-resp-image-wrapper + em a": {
      fontWeight: t.fontWeights.body,
      color: t.colors.lilac,
    },
    ".main-body a": {
      color: t.colors.link.color,
      textDecoration: `none`,
      transition: `all ${t.transition.speed.fast} ${t.transition.curve.default}`,
      borderBottom: `1px solid ${t.colors.link.border}`,
    },
    ".main-body a:hover": {
      borderBottomColor: t.colors.link.hoverBorder,
    },
    ".post-body h1": {
      fontWeight: t.fontWeights.bold,
    },
    ".post-body figure img": {
      marginBottom: 0,
    },
    ".post-body figcaption": {
      color: t.colors.textMuted,
      fontSize: `87.5%`,
      marginTop: t.space[1],
      marginBottom: t.space[3],
    },
    //
    ".main-body a.anchor": {
      color: `inherit`,
      fill: t.colors.link.color,
      textDecoration: `none`,
      borderBottom: `none`,
    },
    ".main-body a.anchor:hover": {
      background: `none`,
    },
    // gatsby-image
    ".main-body a.gatsby-resp-image-link": {
      borderBottom: `transparent`,
      marginTop: t.space[9],
      marginBottom: t.space[9],
    },
    ".main-body figure a.gatsby-resp-image-link": {
      borderBottom: `transparent`,
      marginTop: t.space[9],
      marginBottom: 0,
    },
    ".gatsby-highlight, .gatsby-code-title, .post-body .gatsby-resp-image-link": {
      marginLeft: `-${t.space[6]}`,
      marginRight: `-${t.space[6]}`,
    },
    ".gatsby-resp-image-link": {
      borderRadius: `${t.radii[1]}`,
      overflow: `hidden`,
    },
    // gatsby-remark-code-titles styles
    // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
    ".gatsby-code-title": {
      background: t.colors.code.bg,
      borderBottom: `1px solid ${t.colors.code.border}`,
      color: t.colors.code.text,
      padding: `${t.space[5]} ${t.space[6]} ${t.space[4]}`,
      fontSize: t.fontSizes[0],
      marginTop: t.space[2],
    },
    video: {
      width: `100%`,
      marginBottom: t.space[6],
    },
    ".twitter-tweet-rendered": {
      margin: `${t.space[9]} auto !important`,
    },
    ".egghead-video": {
      border: `none`,
      maxWidth: `100%`,
    },
    // Fancy external links in posts, borrowed from
    // https://github.com/comfusion/after-dark/
    // @see https://github.com/comfusion/after-dark/blob/8fdbe2f480ac40315cf0e01cece785d2b5c4b0c3/layouts/partials/critical-theme.css#L36-L39
    ".gatsby-resp-image-link + em a[href*='//']:after": {
      content: `" " url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20class='i-external'%20viewBox='0%200%2032%2032'%20width='14'%20height='14'%20fill='none'%20stroke='%23744C9E'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='9.38%'%3E%3Cpath%20d='M14%209%20L3%209%203%2029%2023%2029%2023%2018%20M18%204%20L28%204%2028%2014%20M28%204%20L14%2018'/%3E%3C/svg%3E")`,
    },
    [mediaQueries.md]: {
      ".gatsby-highlight, .gatsby-resp-image-link, .gatsby-code-title": {
        marginLeft: 0,
        marginRight: 0,
        borderRadius: `${t.radii[2]}`,
      },
      ".gatsby-code-title": {
        borderRadius: `${t.radii[2]} ${t.radii[2]} 0 0`,
      },
      ".gatsby-code-title + .gatsby-highlight": {
        borderRadius: `0 0 ${t.radii[2]} ${t.radii[2]}`,
      },
    },
  };
};
