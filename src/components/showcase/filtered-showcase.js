/** @jsx jsx */
import { jsx } from "theme-ui"
import ShowcaseList from "./showcase-list"

export const filterByCategories = (list, categories) => {
  const items = list.reduce((aggregated, node) => {
    if (node.categories) {
      const filteredCategories = node.categories.filter(c =>
        categories.includes(c)
      )
      if (
        categories.length === 0 ||
        filteredCategories.length === categories.length
      ) {
        aggregated.push(node)
      }

      return aggregated
    }

    return aggregated
  }, [])

  return items
}

export default ({ data, filters, setFilters }) => (
  <section className="showcase" css={{ display: `flex` }}>
    <div sx={{ width: `100%` }}>
      <ShowcaseList
        items={data.allSitesYaml.edges}
        filters={filters}
        onCategoryClick={c => setFilters(c)}
      />
    </div>
  </section>
)
