import { css } from '@emotion/react'

export default css`
  :root {
    --primary-color: #302ae6;
    --secondary-color: #536390;
    --font-color: #424242;
    --bg-color: #fff;
    --heading-color: #292922;
    --navigation-social-link-color: #78757a;
  }

  [data-theme='dark'] {
    --primary-color: #9a97f3;
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --bg-color: #161625;
    --heading-color: #818cab;
  }

  html,
  body {
    background-color: var(--bg-color);
    color: var(--font-color);
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
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
