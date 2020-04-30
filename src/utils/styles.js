import { css } from "@emotion/core"

export const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  * {
    margin-top: 0;
  }
  body.light {
    --primary-color: #362066;
    --primary-text-color: #fff;
    --featured-bg: #493b8a;
    --featured-text: #fff;
    --secondary-color: #10072b;
    --background: #fff;
    --site-header: var(--background);
    --card-bg: #fff;
    --card-bdr: #eee;
    --card-shadow: #d5d5d5;
    --btn-bg: var(--background);
    --btn-bdr: #d3d6e7;
    --btn-text-color: #868892;
    --btn-hover-bg: var(--btn-bdr);
    --btn-hover-text-color: #00062b;
    --contact-bg: #f7f8fe;
    --contact-bdr: #d3d6e7;
    --input-bg: var(--background);
    .gg-sun {
      display: none;
    }
  }
  body.dark {
    --primary-color: #fff;
    /* --primary-color: #362066; */
    --primary-text-color: #fff;
    --featured-bg: #66578d;
    --featured-text: #fff;
    --secondary-color: #5cc9ac;
    --background: #181326;
    --text-color: rgba(255, 255, 255, 0.88);
    --text-secondary-color: rgba(255, 255, 255, 0.66);
    --site-header: var(--background);
    --card-bg: #181326;
    --card-bdr: #181326;
    --card-shadow: #020204;
    --btn-bg: var(--background);
    --btn-bdr: #d3d6e7;
    --btn-text-color: #868892;
    --btn-hover-bg: var(--btn-bdr);
    --btn-hover-text-color: #00062b;
    --contact-bg: var(--card-shadow);
    --contact-bdr: var(--card-bg);
    --input-bg: var(--card-bg);
    .gg-moon {
      display: none;
    }
  }
  /* System Fonts as used by Medium and WordPress */
  body {
    background-color: var(--background);
    color: var(--text-color);
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const blogWidth = `42rem`
export const breakpointGutter = `@media (min-width: ${blogWidth})`
