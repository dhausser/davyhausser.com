import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import logo from '../assets/img/website-icon.svg';

const ListLink = props => (
  <li
    css={{
      display: "inline-block",
      marginLeft: "1rem"
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function SideBar({ sections = [] }) {
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
          <ul
            css={{
              listStyle: "none",
              float: "right",
              textDecoration: "none"
            }}
          >
            <ListLink to="/store">Store</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
          <h5>{data.site.siteMetadata.description}</h5>
        </div>
      </header>
    </>
  );
}
