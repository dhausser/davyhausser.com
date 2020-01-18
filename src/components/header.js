import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderStyles = styled.div`
  margin: 3rem auto;
  margin-bottom: 1.5rem;
`;

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Nav = () => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
)

export default props => (
  <HeaderStyles>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>{props.headerTitle}</h3>
    </Link>
    <Nav />
  </HeaderStyles>
)