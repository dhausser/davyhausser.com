import { css } from "@emotion/core"

export default css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  ${indexStyles}
`

export const layoutStyles = css`
  min-height: calc(100vh - 40px);
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const container = css`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const main = css`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const footer = css`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const card = css`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export const grid = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;
`

export const code = css`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`
export const link = css`
  color: inherit;
  text-decoration: none;
`

export const title = css`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }
  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }
`

export const description = css`
  line-height: 1.5;
  font-size: 1.5rem;
`

export const indexStyles = css`
  .container {
    ${container}
  }

  .main {
    ${main}
  }

  .footer {
    ${footer}
  }

  .card {
    ${card}
  }

  a {
    ${link}
  }

  .title a {
    ${title}
  }

  .description {
    ${description}
  }

  code {
    ${code}
  }

  .grid {
    ${grid}
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`
