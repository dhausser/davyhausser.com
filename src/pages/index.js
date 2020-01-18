import React from "react"
import styled from "styled-components";
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Header from "../components/header"
import ProjectPreview from '../components/project-preview'

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem auto;
  max-width: 90%;
  width: 57ch;
`;

export default ({ data }) => (
  <Layout>
    <Header headerTitle="MySweetPortfolio" />
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <Content>
      {data.allProjectsJson.edges.map(({ node: project }) => {
        return (
          <ProjectPreview
            key={`preview-${project.slug.current}`}
            title={project.title}
            description={project.description}
            imageData={project.image.childImageSharp.fluid}
            slug={project.slug}
          />
        );
      })}
    </Content>
  </Layout>
);
