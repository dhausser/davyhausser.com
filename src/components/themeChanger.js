import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { ThemeChanger } from "./styles"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <ThemeChanger
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
        </div>
      </label>
    )}
  </ThemeToggler>
)