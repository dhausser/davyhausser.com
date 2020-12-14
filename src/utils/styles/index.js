import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

import {
  colors,
  space,
  transition,
  radii,
  fontSizes,
  fontWeights,
  fonts,
} from "gatsby-design-tokens/dist/theme-gatsbyjs-org";

export { globalStyles } from "./global";

const stripeAnimation = keyframes({
  "0%": { backgroundPosition: `0 0` },
  "100%": { backgroundPosition: `${space[7]} ${space[11]}` },
});

export const focusStyle = {
  outline: 0,
  boxShadow: `0 0 0 2px ${colors.input.focusBoxShadow}`,
};

export const buttonStyles = (t) => {
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
      backgroundSize: (t) => `${t.space[7]} ${t.space[7]}`,
      transition: (t) => `all ${t.transition.default}`,
      ":hover, :focus": {
        backgroundColor: `gatsby`,
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)`,
        color: colors.white,
        animation: `${stripeAnimation} 2.8s linear infinite`,
        borderColor: `gatsby`,
      },
      ":focus": { ...focusStyle },
      ":after": { content: `''`, display: `block` },
      "& svg": { marginLeft: `.2em` },
    },
    secondary: {
      borderColor: `button.secondaryBorder`,
      backgroundColor: `button.secondaryBg`,
      color: `button.secondaryText`,
      fontWeight: `body`,
    },
  };
};

// form elements
export const formInputFocus = {
  borderColor: colors.input.focusBorder,
  ...focusStyle,
};

export const formInput = {
  backgroundColor: colors.white,
  border: `1px solid ${colors.input.border}`,
  borderRadius: `${radii[2]}`,
  display: `block`,
  fontFamily: fonts.system,
  fontSize: fontSizes[2],
  fontWeight: fontWeights.body,
  lineHeight: `2.25rem`,
  py: 0,
  px: space[2],
  transition: `box-shadow ${transition.speed.default} ${transition.curve.default}`,
  verticalAlign: `middle`,
  width: `100%`,
  "::placeholder": {
    color: colors.input.placeholder,
    opacity: 1,
  },
  "&:focus": {
    ...formInputFocus,
  },
  "&:disabled": {
    cursor: `not-allowed`,
    opacity: `0.5`,
  },
};

export const themedInputFocus = {
  bg: `themedInput.backgroundFocus`,
  boxShadow: (t) => `0 0 0 2px ${t.colors.themedInput.focusBoxShadow}`,
  outline: 0,
  width: `100%`,
};

export const themedInput = {
  ...formInput,
  appearance: `none`,
  bg: `themedInput.background`,
  border: 0,
  color: `text`,
  overflow: `hidden`,
  px: 3,
  ":focus": {
    ...themedInputFocus,
  },
  "::placeholder": {
    color: `themedInput.placeholder`,
  },
};

// Layout
export const blogWidth = `42rem`;
export const breakpointGutter = `@media (min-width: ${blogWidth})`;

export const breakpoints = {
  mobileMin: "480px",
  mobileMax: "959px",
  tabletMin: "960px",
  tabletMax: "1199px",
  desktopMin: "1200px",
};

export const pullIntoGutter = {
  marginLeft: `-${space[6]}`,
  marginRight: `-${space[6]}`,
  paddingLeft: space[6],
  paddingRight: space[6],
};

export const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HeadingWrapCont = styled.div`
  padding-top: 40px;
  background-position: 0 0;
  background-repeat: no-repeat;
`;

export const HeadingMain = styled.h1`
  font-weight: 700;
  font-size: 7vw;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  margin-bottom: 0;
  margin-left: 0px;

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 60px;
    margin-bottom: 0;
    margin-left: 50px;
  }

  .blue {
    color: #b4e0e8;
  }

  > span {
    display: inline-block;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.2s forwards;
  }

  > span:nth-child(1) {
    animation-delay: 0s;
  }

  > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  > span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const Container = styled.div`
  margin: 100px 0 200px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

export const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }

  p {
    font-weight: 700;
    min-width: 200px;
    margin: 20px 0 0 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      min-width: unset;
      margin: 30px 0;
    }

    span {
      font-size: 20px;
      margin-right: 5px;
    }
  }
`;

export const SubContainer = styled.div`
  margin: 0px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

export const TextContent = styled.div`
  max-width: 700px;
  .Paragraph {
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      :hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;

export const TextContentWrap = styled(TextContent)`
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

export const SkillContent = styled.div`
  width: 100%;
`;

export const Paragraph = styled.p`
  margin: 50px 0;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;

  a {
    border-bottom: 2px solid transparent;
    transition: 0.3s;

    :hover {
      border-bottom: 2px solid black;
    }
  }
`;

export const Heading = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  transform: translateY(30px);
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 40px;
    transform: scale(1);
  }

  > span {
    color: #b4e0e8;
  }
`;
