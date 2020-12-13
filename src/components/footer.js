import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Heading, Paragraph, breakpoints } from "../utils/styles";
import Contact from "./contact";
import Layout from "./layout";
// import ContactEmail from "../ContactEmail";
// import InstagramGrid from "../InstagramGrid";
// import ProjectRow from "../ProjectRow";

const FooterCont = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
  padding: 40px 0 0 0;
  margin: 50px 0 0 0;

  a {
    text-align: left;
    color: black;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    padding: 0;
    margin: 100px 0 0 0;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const SubContainer = styled.div`
  margin: 60px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 50px;
  }
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

const Container = styled.div`
  margin: 100px 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const Social = styled.div`
  a {
    margin: 0 0 0 30px;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;

    :hover {
      border-bottom: 2px solid black;
    }
  }
`;

function Footer(props) {
  return (
    <FooterCont>
      <Layout>
        <SubContainer>
          <TextContent>
            <Heading>Let's Build Something Together</Heading>
            <SubParagraph>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </SubParagraph>
          </TextContent>
        </SubContainer>
        <Contact />
        {/* <InstagramGrid instagramDisplay={props.instagramDisplay} /> */}
      </Layout>
    </FooterCont>
  );
}

export default Footer;
