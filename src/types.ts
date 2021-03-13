import { FluidObject } from "gatsby-image"

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
  tags: [string]
  slug?: string
  url: string
  imageData: FluidObject
}
