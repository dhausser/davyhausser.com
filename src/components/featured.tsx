import * as React from 'react'
import { ProjectPreview } from 'components'
import { FeaturedProps } from 'types'

function Featured({ projects }: FeaturedProps) {
  return (
    <div className="full-height">
      <div className="text-content">
        <div className="heading">Work</div>
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles, and companies I&apos;ve
          dedicated my time to.
        </p>
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
            author="Davy Hausser"
          />
        ))}
      </div>
    </div>
  )
}

export default Featured
