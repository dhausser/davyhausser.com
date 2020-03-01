import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import logo from '../assets/img/website-icon.svg';
import styled from "@emotion/styled"

const Nav = styled.ul`
  list-style: none;
  float: right;
  text-decoration: none;
`

const NavLink = styled.li`
  display: inline-block;
  margin-left: 1rem;
`

export default function SideBar() {
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
  return (
    <>
      <header id="header">
        <div className="inner">
          <Link to="/" className="logo">
            <span className="symbol">
              <img src={logo} alt="" />
            </span>
            <span className="title">{data.site.siteMetadata.title}</span>
          </Link>
          <Nav>
            <NavLink><Link to="/store/">Store</Link></NavLink>
            <NavLink><Link to="/blog/">Blog</Link></NavLink>
            <NavLink><Link to="/about/">About</Link></NavLink>
            <NavLink><Link to="/contact/">Contact</Link></NavLink>
          </Nav>
          <h5>{data.site.siteMetadata.description}</h5>
        </div>
      </header>
    </>
  );
}
