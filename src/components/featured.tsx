import * as React from 'react'
import { ProjectPreview } from 'components'
import { ProjectData } from 'types'

interface Props {
  projects: Array<{ node: ProjectData }>
}

function Featured({ projects }: Props) {
  return (
    <div className="full-height">
      <div>
        <div className="text-content">
          <div className="heading">Work</div>
          <p>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I&apos;ve
            dedicated my time to.
          </p>
        </div>
      </div>
      <div>
        {projects.map(({ node: project }) => (
          <ProjectPreview
            key={`preview-${project.slug}`}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            url={project.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Featured
