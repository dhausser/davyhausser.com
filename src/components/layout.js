import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div style={{ margin: '20px', padding: '20px' }}>
          <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        </div>
        <div style={{ margin: '20px', padding: '20px' }}>
          <p>&copy; 2020 Davy Hausser &bull; Crafted with <span role="img" aria-label="love">⚡</span> @ <a href="https://github.com/dhausser">GitHub</a> | <a href="https://www.linkedin.com/in/davyhausser/">LinkedIn</a></p>
        </div>
      </footer>
    </div>
  )
}