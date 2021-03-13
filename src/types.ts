import { FluidObject } from "gatsby-image"
import { PageProps } from "gatsby"

export interface ProjectProps {
  data: {
    projectsJson: {
      title: string
      image: { childImageSharp: { fluid: FluidObject } }
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
  slug?: string
  url?: string
  imageData: FluidObject
}

export interface SiteMetaData {
  title: string
  description: string
}

export interface FileData {
  childImageSharp: {
    fluid: FluidObject | FluidObject[]
  }
}

export interface Data {
  site: {
    siteMetadata: SiteMetaData
  }
  file: FileData
  allProjectsJson: { edges: [{ node: any }] }
}

export interface Props extends PageProps {
  data: Data
}
