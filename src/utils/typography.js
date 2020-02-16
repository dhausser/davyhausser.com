import Typography from "typography"

const overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  body: {
    // backgroundColor: "#e3e8ee",
    color: "#4f566b",
  },
  a: {
    // color: "#5469d4",
    color: "#7646ff",
    textDecoration: "none",
  }
})

const typography = new Typography({ overrideStyles })

export const { scale, rhythm, options } = typography
export default typography
