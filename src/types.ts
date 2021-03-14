import { PageProps } from 'gatsby'

export interface SiteMetaData {
  title: string
  description: string
}

export interface FileData {
  childImageSharp: any
}

export interface Data {
  site: {
    siteMetadata: SiteMetaData
  }
  file: FileData
  allProjectsJson: { edges: Array<{ node: any }> }
}

export interface Props extends PageProps {
  data: Data
}

export interface ProjectProps {
  data: {
    projectsJson: {
      title: string
      image: { childImageSharp: any }
      imageData: any
      description: string
      tags: [string]
      url: string
    }
  }
}

export interface ProjectData {
  title: string
  description: string
  tags?: [string]
  slug: string
  url?: string
  imageData: any
}
