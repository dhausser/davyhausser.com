import * as React from 'react'
import { Link } from 'gatsby'
import { GoMarkGithub } from 'react-icons/go'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
// import { Switch } from 'components'

interface HeaderProps {
  siteTitle: string
}

function Header({ siteTitle }: HeaderProps) {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="left">
          <Link to="/">
            <div className="brand-logo">{siteTitle}</div>
          </Link>
        </div>
        <div className="right">
          <div className="styled-social-nav">
            <a
              href="https://github.com/dhausser"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
            </a>
            <a
              href="https://www.twitter.com/davyhausser"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/davyhausser"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            {/* <div className="switch-wrapper">
              <Switch />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
