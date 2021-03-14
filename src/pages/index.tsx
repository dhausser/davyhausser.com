import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Featured, Contact } from '@components'
import { DataType } from '../types'

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
} from '../utils/styles'

export default function HomePage({ data }: PageProps<DataType>) {
  const { siteMetadata } = data.site
  return (
    <Layout>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
      <HeadingWrapCont>
        <HeadingMain>
          <span>Hi there, I’m Davy.</span>
          <br />
          <span>Product Manager</span>
          <br />
          <span>Software Engineer</span>
        </HeadingMain>
      </HeadingWrapCont>
      <Container
        style={{
          alignItems: 'start',
          margin: 0,
          justifyContent: 'space-between',
        }}
      >
        <TextContentWrap>
          <Paragraph>
            I&apos;m an experienced product manager and engineer with a passion
            for innovation and technology.
          </Paragraph>
        </TextContentWrap>
      </Container>
      <Container>
        <SubContainer>
          <SkillContent>
            <TextContent>
              <Heading>Skills</Heading>
              <Paragraph>
                Through my self teching journey and experience, I&apos;ve gained
                a solid understanding of computer science and web development
                concepts, and have dedicated a lot of my free time to apply
                these concepts to real-world scenarios and applications.
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
          <Heading>Work</Heading>
          <Paragraph>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I&apos;ve
            dedicated my time to.
          </Paragraph>
        </TextContent>
      </SubContainer>
      <SubContainer>
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <ProjectPreview
            key={`preview-${project.slug}`}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            url={project.url}
          />
        ))}
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
          image {
            childImageSharp {
              gatsbyImageData(
                width: 960
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
