import { css } from '@emotion/react'

export default css`
  :root {
    --primary-color: #302ae6;
    --secondary-color: #536390;
    --font-color: #424242;
    --text-color: #36313d;
    --bg-color: #fff;
    --warning-colors: #da0013;
    --heading-color: #292922;
    --navigation-color: #78757a;
    --border: #f0f0f2;
    --radii: 3px;
    --space-2: 0.5rem;
    --space-7: 2rem;
    --space-8: 2.5rem;
    --space-11: 4rem;
    --fonts-sytem: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-size-1: 0.875rem;
    --font-size-4: 1.25rem;
    --font-weight-body: 400;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-heading: 700;
    --font-weight-semi-bold: 600;
    --line-height-body: 1.5;
    --line-height-default: 1.5;
    --line-height-dense: 1.25;
    --line-height-heading: 1.25;
    --line-height-loose: 1.75;
    --line-height-solid: 1;
    --themed-input-background: #f5f5f5;
    --themed-input-background-focus: #ffffff;
    --themed-input-focus-border: #663399;
    --themed-input-focus-box-shadow: #d9bae8;
    --themed-input-icon: #78757a;
    --themed-input-icon-focus: #635e69;
    --themed-input-placeholder: #635e69;
    --button-primary-bg: #663399;
    --button-primary-border: #663399;
    --button-primary-text: #ffffff;
  }

  [data-theme='dark'] {
    --primary-color: #9a97f3;
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --text-color: #d9d7e0;
    --bg-color: #161625;
    --heading-color: #818cab;
    --border: #232129;
    --themed-input-background: #232129;
    --themed-input-background-focus: black;
    --themed-input-focus-border: #663399;
    --themed-input-focus-box-shadow: #d9bae8;
    --themed-input-icon: #78757a;
    --themed-input-icon-focus: #635e69;
    --themed-input-placeholder: #635e69;
    --button-primary-bg: #663399;
    --button-primary-border: #663399;
    --button-primary-text: #ffffff;
  }

  html,
  body {
    margin: 0rem;
    color: var(--font-color);
    background-color: var(--bg-color);
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    font: 100%/1.5 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
      'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(---heading-color);
    letter-spacing: -0.015em;
  }

  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.51572rem;
    line-height: 1.25;
  }

  a {
    text-decoration: none;
  }

  header {
    display: block;
  }

  svg {
    color: var(--navigation-social-link-color);
  }

  button,
  select {
    text-transform: none;
  }
`
