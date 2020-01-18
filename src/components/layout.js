import React from "react";
import styled from "styled-components";
import "./layout.css";
const Container = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`
export default ({ children }) => <Container>{children}</Container>