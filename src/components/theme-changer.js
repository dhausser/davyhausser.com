/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { themeChanger, ModeContainer, Sun, Moon } from "../utils/styles"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          css={themeChanger}
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        <ModeContainer>
          <Sun className="gg-sun" />
          <Moon className="gg-moon" />
        </ModeContainer>
      </label>
    )}
  </ThemeToggler>
)