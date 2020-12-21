import * as theme from "gatsby-design-tokens/dist/theme-gatsbyjs-org"

export const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba(0, 0, 0, 1)",
  ...theme,
}

export const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba(255, 255, 255, 1)",
  ...theme,
}

export default theme
