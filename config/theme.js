import * as theme from 'gatsby-design-tokens/dist/theme-gatsbyjs-org'

export const themeLight = {
  text: '#000',
  background: '#fff',
  buttonText: '#000',
  buttonTextHover: '#fff',
  buttonBorder: '#000',
  buttonBg: 'rgba(0, 0, 0, 0)',
  buttonBgHover: 'rgba(0, 0, 0, 1)',
  heading: '#000000',
  navigationSocial: '#78757a',
  border: '#f0f0f2',
  radii: ['1px', '2px', '3px', '4px'],
  space: [...Array(10).keys()],
  // TO FIX
  gatsby: theme.gatsby,
  primaryBg: theme.primaryBg,
  primaryBorder: theme.primaryBorder,
  primaryText: theme.primaryText,
  ...theme,
}

export const themeDark = {
  text: '#fff',
  background: '#121212',
  buttonText: '#fff',
  buttonTextHover: '#000',
  buttonBorder: '#fff',
  buttonBg: 'rgba(255, 255, 255, 0)',
  buttonBgHover: 'rgba(255, 255, 255, 1)',
  heading: 'rgba(255,255,255,0.8)',
  navigationSocial: '#78757a',
  border: '#232129',
  radii: ['1px', '2px', '3px', '4px'],
  space: [...Array(10).keys()],
  ...theme,
}

export default theme
