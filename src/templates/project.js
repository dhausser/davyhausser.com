/** @jsx jsx */
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { jsx } from "@emotion/core"
import Layout from '../components/layout';
// import Project from '../components/project';

import { Post, PostThumbnail, PostTitle, PostMeta } from "../utils/styles"

const ProjectPage = ({ data: { projectsJson: project } }) => {
  console.log(project)
  return (
    <Layout>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <div>
        <Post>
          <PostThumbnail
            style={{ backgroundImage: `url(${project.image.childImageSharp.fluid.src})` }}
          >
            <PostTitle>{project.title}</PostTitle>
            <PostMeta>{project.date}</PostMeta>
          </PostThumbnail>
        </Post>
      </div>
      <p>{project.description}</p>
      <p>
        <a href={project.url}>View this project online &rarr;</a>
      </p>
      <h3>Tags:</h3>
      <ul>
        {project.tags.map(tag => (
          <li key={`tag-${tag}`}>{tag}</li>
        ))}
      </ul>
      <p>
        <Link to="/">&larr; back to all projects</Link>
      </p>
      {/* <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      tags={project.tags}
      url={project.url}
    /> */}
    </Layout >
  )
};

export default ProjectPage;
export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
