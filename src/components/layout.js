// import "../styles/fontawesome-all.min.css"
import "../styles/main.css"
// import "../styles/noscript.css"

import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import { css } from "@emotion/core"
import Logo from "../images/logo.svg"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-left: 1rem;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ title, description }) => (
  <header
    css={css`
      overflow: hidden;
    `}
  >
    <Link
      to={`/`}
      css={css`
      text-decoration: none;
      `}
      className="logo"
    >
      <span class="symbol"><img src={Logo} alt="Diamond shaped logo" /></span>
      <span class="title">
        {title}
      </span>
    </Link>
    <ul
      css={css`
      list-style: none;
      float: right;
      text-decoration: none;
      `}
    >
      <ListLink to="/store">Store</ListLink>
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
    <h5>{description}</h5>
  </header>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v6.0'
      });
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  })
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </Helmet>
      <body className="is-preload">
        <div id="fb-root"></div>
        <div class="fb-customerchat"
          attribution="setup_tool"
          page_id="102517684675518"
          theme_color="#7646ff">
        </div>

        <div id="wrapper">

          <header id="header">
            <div className="inner">
              <Header
                title={data.site.siteMetadata.title}
                description={data.site.siteMetadata.description}
              />
            </div>
          </header>

          <div id="main">
            <div className="inner">
              {children}
            </div>
          </div>

          <footer id="footer">
            <div className="inner">
              <section>
                <form method="post" action="#">
                  <div class="fields">
                    <div class="field half">
                      <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="field half">
                      <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="field">
                      <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <ul class="actions">
                    <li><input type="submit" value="Send" class="primary" /></li>
                  </ul>
                </form>
              </section>
              <section css={{ marginTop: "2rem" }}>
                <h2>Follow</h2>
                <ul className="icons">
                  <li>
                    <a href="https://www.linkedin.com/in/davyhausser" className="icon brands style2 fa-linkedin"><span
                      className="label">LinkedIn</span></a>
                  </li>
                  <li>
                    <a href="http://github.com/dhausser" className="icon brands style2 fa-github"><span
                      className="label">GitHub</span></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/DavyHausser" className="icon brands style2 fa-twitter"><span
                      className="label">Twitter</span></a>
                  </li>
                  <li><a href="mailto:davy.hausser@gmail.com" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
                </ul>
              </section>
            </div>
          </footer>
        </div >
      </body>
    </>
  )
}
