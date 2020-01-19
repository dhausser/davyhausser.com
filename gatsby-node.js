const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
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

  // const projects = result.data.allProjectsJson.edges.map(({ node }) => node);
  const projects = result.data.allProjectsJson.edges

  projects.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    })
  })
}
