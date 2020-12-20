/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Global, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import Navigation from "./Navigation";
import { globalStyles, breakpoints, breakpointGutter } from "../utils/styles";

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 25px auto;
  opacity: 0;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

  a {
    text-decoration: none;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 940px;
    padding: 20px;
    margin: 75px auto;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 20px;
    margin: 75px auto;
  }
`;

export default ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Navigation />
    <div
      sx={{
        px: `env(safe-area-inset-left)`,
        pb: (t) => t.sizes.headerHeight,
        [breakpointGutter]: {
          pt: (t) => t.sizes.headerHeight,
        },
      }}
    >
      <Layout>{children}</Layout>
    </div>
  </>
);
