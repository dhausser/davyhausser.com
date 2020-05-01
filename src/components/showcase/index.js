import React, { useState } from "react"

import FeaturedSites from "./featured-sites"
import FilteredShowcase from "./filtered-showcase"

export default ({ data }) => {
  const [filters, setFilters] = useState([])
  return (
    <>
      <FeaturedSites
        setFilters={setFilters}
        featured={data.allSitesYaml.edges}
      />
      <FilteredShowcase filters={filters} setFilters={setFilters} data={data} />
    </>
  )
}
