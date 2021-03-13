import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Contact } from "../components/contact"
import { ProjectLink } from "../utils/styles"

const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
`

export function Project(props: any) {
  const { title, description, url, imageData, tags, slug } = props
  return (
    <Layout>
      <h1>{title}</h1>
      <GatsbyImage image={imageData} alt={title} />
      <LinkRow>
        <a href={url}>
          <ProjectLink>
            Live <span>&#8250;</span>
          </ProjectLink>
        </a>
        <a href={`https://github.com/dhausser/${slug}`}>
          <ProjectLink>
            Code <span>&#8250;</span>
          </ProjectLink>
        </a>
      </LinkRow>
      <p>{description}</p>
      <ul>
        {tags.map((tag: string) => (
          <li>{tag}</li>
        ))}
      </ul>
      <p>Build by: Davy Hausser</p>
      <Contact />
    </Layout>
  )
}
