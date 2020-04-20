import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import ProjectCard from "../components/project-card"
import IntagramCard from "../components/instagram-card"
import useInstagram from "../components/instagram"

export default function Index({ data }) {
  const gramz = useInstagram()
  return (
    <>
      <div
        css={css`
          display: block;
        `}
      >
        <heading>Showcase</heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum sapiente, suscipit consequatur animi quam quo
          explicabo adipisci natus vero, dolor quaerat. Et cum distinctio
          provident facere dolorem voluptas non.
        </p>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 32px;
          margin-top: 32px;

          @media only screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
          }

          /* @media only screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
          } */
        `}
      >
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            tags={project.tags}
            url={project.url}
          />
        ))}
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            <IntagramCard imageUrl={gram.thumbnail} imageAlt={gram.caption} />
          </a>
        ))}
      </div>
    </>
  )
}

export const allProjectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          url
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
`
