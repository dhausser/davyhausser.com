/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import { ShowcaseIcon, BlogIcon, DocsIcon } from "../assets/icons";
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org";
import { svgStyles } from "../utils/styles";

const getProps = ({ isPartiallyCurrent }) => {
  return {
    ...(isPartiallyCurrent
      ? {
          "data-active": true,
        }
      : {}),
  };
};

const MobileNavItem = ({ linkTo, label, icon }) => (
  <Link
    sx={{
      ...styles.link.default,
      ...styles.svg.default,
      "&[data-active]": {
        ...styles.link.active,
        ...styles.svg.active,
      },
    }}
    getProps={getProps}
    to={linkTo}
  >
    <span dangerouslySetInnerHTML={{ __html: icon }} />
    <div>{label}</div>
  </Link>
);
const navItems = [
  { id: `showcase`, text: `Showcase`, icon: ShowcaseIcon },
  { id: `blog`, text: `Blog`, icon: BlogIcon },
  { id: "contact", text: `Contact`, icon: DocsIcon },
];

export default () => (
  <div
    sx={{
      alignItems: `center`,
      bg: `navigation.background`,
      borderColor: `ui.border`,
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      bottom: 0,
      display: `flex`,
      fontFamily: `heading`,
      justifyContent: `space-around`,
      left: 0,
      paddingBottom: `env(safe-area-inset-bottom)`,
      position: `fixed`,
      right: 0,
      zIndex: `navigation`,
      [mediaQueries.md]: {
        display: `none`,
      },
    }}
  >
    {navItems.map(({ id, text, icon }) => (
      <MobileNavItem linkTo={`/${id}/`} key={id} label={text} icon={icon} />
    ))}
  </div>
);

const styles = {
  svg: {
    default: {
      ...svgStyles().stroke,
      ...svgStyles().default,
      "&:hover": { ...svgStyles().active },
    },
    active: svgStyles().active,
  },
  link: {
    default: {
      alignItems: `center`,
      borderRadius: 1,
      color: `navigation.linkDefault`,
      display: `flex`,
      flexDirection: `column`,
      flexShrink: 1,
      fontSize: 1,
      lineHeight: `solid`,
      justifyContent: `center`,
      position: `relative`,
      textAlign: `center`,
      textDecoration: `none`,
      width: `headerHeight`,
      height: `headerHeight`,
      "& svg": {
        display: `block`,
        height: 32,
        mb: 1,
        mt: 0,
        mx: `auto`,
        "& path, & line, & polygon": {
          transition: `default`,
        },
      },
      ":hover": {
        color: `navigation.linkHover`,
      },
    },
    active: {
      color: `navigation.linkActive`,
      fontWeight: `bold`,
      "&:before": {
        bg: `navigation.linkActive`,
        content: `" "`,
        height: `2px`,
        width: `90%`,
        position: `absolute`,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        left: `50%`,
        top: `-1px`,
        transform: `translateX(-50%)`,
      },
    },
  },
};
