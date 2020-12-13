import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Layout from "../components/layout";
import ProjectRow from "../components/project-row";
import PageMetadata from "../components/page-metadata";
import EmailCaptureForm from "../components/email-capture-form";

import {
  Heading,
  HeadingMain,
  HeadingWrapCont,
  Container,
  SkillTable,
  SubContainer,
  TextContent,
  TextContentWrap,
  SkillContent,
  Paragraph,
} from "../utils/styles";

export default ({ data }) => (
  <Layout>
    <PageMetadata
      title={data.site.siteMetadata.author.name}
      description={data.site.siteMetadata.description}
    />
    <HeadingWrapCont>
      <HeadingMain>
        <span>Hi there, I’m Davy.</span>
        <br />
        <span>Full Stack Developer</span>
        <br />
      </HeadingMain>
    </HeadingWrapCont>
    <Container
      style={{
        alignItems: "start",
        margin: 0,
        justifyContent: "space-between",
      }}
    >
      <TextContentWrap>
        <Paragraph>
          I'm a freelance software developer currently studying web development
          and design.
          <br />
          <br />
          As I've grown as a developer, I've worked alongside senior designers
          and developers who have raised my standards for whats expected of any
          web application.
        </Paragraph>
      </TextContentWrap>
      <TextContentWrap>
        <Paragraph>
          Through these experiences, I've had the opportunity to create
          memorable products that are not only enjoyable to use but are written
          in code that's maintainable and easy to understand.
        </Paragraph>
      </TextContentWrap>
    </Container>
    <Container>
      <SubContainer>
        <SkillContent>
          <TextContent>
            <Heading>My Skills</Heading>
            <Paragraph>
              Through my studies, I've gained a solid understanding of computer
              science and web development concepts, and have dedicated a lot of
              my free time to apply these concepts to real-world scenarios and
              applications.
            </Paragraph>
          </TextContent>
          <SkillTable>
            <row>
              <Paragraph>
                <span>&#9675;</span> JavaScript
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> TypeScript
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>&#9675;</span> React
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> HTML & CSS
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>&#9675;</span> GraphQL
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> Node.js
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>&#9675;</span> Git
              </Paragraph>
              <Paragraph>
                <span>&#9675;</span> SQL & MongoDB
              </Paragraph>
            </row>
          </SkillTable>
        </SkillContent>
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <TextContent>
          <Heading>What I've been working on </Heading>
          <Paragraph>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </Paragraph>
        </TextContent>
      </SubContainer>
      <SubContainer>
        <ProjectRow data={data} />
      </SubContainer>
    </Container>
    <EmailCaptureForm isHomepage={true} />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
        description
      }
    }
    file(relativePath: { eq: "wanderlost-dark.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
