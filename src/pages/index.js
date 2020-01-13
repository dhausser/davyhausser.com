import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
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

export default ({ data }) => (
  <Layout>
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
  </Layout>
);
