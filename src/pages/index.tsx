import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Contact } from "../components/contact"
import { ProjectPreview } from "../components/project-preview"
import { Props } from "../types"

import {
  Heading,
  HeadingMain,
  HeadingWrapCont,
  Container,
  SubContainer,
  SkillTable,
  TextContent,
  TextContentWrap,
  SkillContent,
  Paragraph,
} from "../utils/styles"

export default function HomePage({ data }: Props): JSX.Element {
  const { siteMetadata } = data.site
  const projects = data.allProjectsJson.edges
  const [{ node: project }] = projects
  return (
    <Layout>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
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
            I'm a freelance software developer currently studying web
            development and design.
            <br />
            <br />
            As I've grown as a developer, I've worked alongside senior designers
            and developers who have raised my standards for whats expected of
            any web application.
          </Paragraph>
        </TextContentWrap>
        <TextContentWrap>
          <Paragraph>
            Through these experiences, I've had the opportunity to create
            memorable products that are not only enjoyable to use but are
            written in code that's maintainable and easy to understand.
          </Paragraph>
        </TextContentWrap>
      </Container>
      <Container>
        <SubContainer>
          <SkillContent>
            <TextContent>
              <Heading>My Skills</Heading>
              <Paragraph>
                Through my studies, I've gained a solid understanding of
                computer science and web development concepts, and have
                dedicated a lot of my free time to apply these concepts to
                real-world scenarios and applications.
              </Paragraph>
            </TextContent>
            <SkillTable>
              <div>
                <Paragraph>
                  <span>&#9675;</span> JavaScript
                </Paragraph>
                <Paragraph>
                  <span>&#9675;</span> TypeScript
                </Paragraph>
              </div>
              <div>
                <Paragraph>
                  <span>&#9675;</span> React
                </Paragraph>
                <Paragraph>
                  <span>&#9675;</span> HTML & CSS
                </Paragraph>
              </div>
              <div>
                <Paragraph>
                  <span>&#9675;</span> GraphQL
                </Paragraph>
                <Paragraph>
                  <span>&#9675;</span> Node.js
                </Paragraph>
              </div>
              <div>
                <Paragraph>
                  <span>&#9675;</span> Git
                </Paragraph>
                <Paragraph>
                  <span>&#9675;</span> SQL & MongoDB
                </Paragraph>
              </div>
            </SkillTable>
          </SkillContent>
        </SubContainer>
      </Container>
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
        <ProjectPreview
          key={`preview-${project.slug}`}
          title={project.title}
          description={project.description}
          slug={project.slug}
          imageData={data.file.childImageSharp.gatsbyImageData}
          url={project.url}
        />
      </SubContainer>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          image
        }
      }
    }
    file(relativePath: { eq: "images/roadmap.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`
