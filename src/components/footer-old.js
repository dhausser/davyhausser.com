import React from "react"
import styled from "@emotion/styled"
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io"

const FooterStyles = styled.footer`
  background-size: 500px;
  padding-top: 180px;
  padding-bottom: 80px;
  clip-path: polygon(0 100px, 100% 0, 100% 100%, 0% 100%);
  & > div {
    color: black;
    display: grid;
    max-width: var(--maxWidth);
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3rem;
    .bottom {
      grid-column: 1 / -1;
      text-align: center;
      background: none;
      color: white;
    }
    & > * {
      padding: 2rem;

      background-size: 500px;
      h3 {
        margin: 0;
        padding: 2px;
        margin-bottom: 2rem;
        text-align: center;
        margin-top: -30px;
        background: none;
        svg {
          position: relative;
          top: 3.5px;
          margin-right: 3px;
        }
        .highlight {
          background-size: 500px;
          padding: 5px;
        }
      }
      p {
        font-size: 1.6rem;
      }
    }
  }
  a.socialLink {
    background: black;
    padding: 2px 6px;
    border-radius: 4px;
    text-decoration: none;
    color: white;
    display: inline-flex;
    align-items: center;
    &[href*="youtube.com"] {
      background: red;
    }
    &[href*="github.com"] {
      background: white;
      color: black;
    }
    svg {
      margin-right: 3px;
    }
  }
`
export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <div className="bottom">
          I post videos on{` `}
          <a
            href="https://youtube.com/MrServyn?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <IoLogoYoutube /> YouTube
          </a>
          {` `}
          and code on{` `}
          <a
            href="https://github.com/dhausser"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <IoLogoGithub /> Github
          </a>
          <p>&copy; Davy Hausser 2020 — {new Date().getFullYear()}</p>
        </div>
      </div>
    </FooterStyles>
  )
}
