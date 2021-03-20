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

export interface FormProps {
  onSuccess: React.Dispatch<React.SetStateAction<string>>
  confirmMessage: string
}

export interface LayoutProps {
  children: React.ReactElement | Array<React.ReactElement>
}

export interface SEOProps {
  title: string
  description: string
  lang?: string
  meta?: ConcatArray<
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined }
  >
}

export interface FeaturedProps {
  projects: Array<{ node: ProjectData }>
}