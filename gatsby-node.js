exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("There was a problem loading your projects!")
    return
  }

  const projects = result.data.allProjectsJson.edges.map(({ node }) => node)

  projects.forEach(project => {
    actions.createPage({
      path: `/${project.slug}/`,
      component: require.resolve("./src/templates/project.tsx"),
      context: {
        slug: project.slug,
      },
    })
  })
}
