import React from "react"

import FeaturedSites from "./featured-sites"
import ProjectGrid from "./project-grid"

export default ({ projects }) => (
  <>
    <FeaturedSites featured={projects} />
    {/* <ProjectGrid projects={projects} /> */}
  </>
)
