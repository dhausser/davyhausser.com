/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import {
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedinIcon,
} from "react-icons/fa";
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org";

import DarkModeToggle from "./DarkModeToggle";
import { breakpointGutter } from "../utils/styles";

const navItemTopOffset = `0.4rem`;
const navItemHorizontalSpacing = [1, null, 2];

const overrideDefaultMdLineHeight = {
  [mediaQueries.md]: {
    lineHeight: (t) => t.sizes.headerHeight,
  },
};

const navItemStyles = {
  borderBottom: `2px solid transparent`,
  color: `navigation.linkDefault`,
  display: `block`,
  fontSize: 3,
  lineHeight: (t) => t.sizes.headerHeight,
  [mediaQueries.md]: {
    lineHeight: (t) => `calc(${t.sizes.headerHeight} - ${navItemTopOffset})`,
  },
  position: `relative`,
  textDecoration: `none`,
  zIndex: 1,
  "&:hover, &:focus": { color: `navigation.linkHover` },
};

const SocialNavItem = ({ href, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    sx={{
      ...navItemStyles,
      ...overrideDefaultMdLineHeight,
      transform: `translate(0px, 4px)`,
      color: `navigation.socialLink`,
      px: navItemHorizontalSpacing,
    }}
  >
    {children}
  </a>
);

const Navigation = ({ pathname }) => {
  const isHomepage = pathname === `/`;

  return (
    <header
      sx={{
        bg: `navigation.background`,
        height: `headerHeight`,
        left: 0,
        px: `env(safe-area-inset-left)`,
        position: `relative`,
        right: 0,
        zIndex: `navigation`,
        [breakpointGutter]: {
          position: isHomepage ? `absolute` : `fixed`,
        },
      }}
    >
      <div
        sx={{
          alignItems: `center`,
          display: `flex`,
          justifyContent: `space-between`,
          fontFamily: `heading`,
          height: `100%`,
          margin: `0 auto`,
          px: 6,
          position: `relative`,
          width: `100%`,
          "&:after": {
            bg: isHomepage ? `transparent` : `ui.border`,
            bottom: 0,
            content: `''`,
            height: 1,
            left: 0,
            position: `absolute`,
            right: 0,
            zIndex: -1,
          },
        }}
      >
        <Link
          to="/"
          sx={{
            alignItems: `center`,
            color: `inherit`,
            display: `flex`,
            flexShrink: 0,
            height: `logo`,
            mr: [1, null, 3],
            textDecoration: `none`,
            overflow: [`hidden`, null, `visible`],
          }}
          aria-label={`DH, Back to showcase`}
        >
          <h2
            sx={{
              height: `logo`,
              width: `auto`,
              maxWidth: `none`,
              m: 0,
            }}
          >
            DH
          </h2>
        </Link>
        <div
          sx={{
            display: `flex`,
            alignSelf: `flex-end`,
          }}
        >
          <SocialNavItem href="https://github.com/dhausser" title="GitHub">
            <GithubIcon />
          </SocialNavItem>
          <SocialNavItem
            href="https://www.twitter.com/davyhausser"
            title="Twitter"
          >
            <TwitterIcon />
          </SocialNavItem>
          <SocialNavItem
            href="https://www.linkedin.com/in/davyhausser"
            title="Linkedin"
          >
            <LinkedinIcon />
          </SocialNavItem>
          <div
            sx={{
              ...navItemStyles,
              ...overrideDefaultMdLineHeight,
              color: `navigation.socialLink`,
              ml: navItemHorizontalSpacing,
              "&:hover": {
                color: `navigation.linkHover`,
              },
            }}
          >
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
