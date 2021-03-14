import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ProjectData {
  title: string
  description: string
  image: IGatsbyImageData
  slug: string
  url: string
  repository: string
  tags: [string]
}

export interface ProjectProps {
  data: {
    projectsJson: ProjectData
  }
}

export interface DataType {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
  allProjectsJson: { edges: Array<{ node: ProjectData }> }
}
