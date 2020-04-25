import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { ThemeChanger, ModeContainer, Sun, Moon } from "./styles"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <ThemeChanger
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