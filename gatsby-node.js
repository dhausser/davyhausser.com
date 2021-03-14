// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

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
    reporter.panic('There was a problem loading your projects!')
    return
  }

  const projects = result.data.allProjectsJson.edges.map(({ node }) => node)

  projects.forEach((project) => {
    actions.createPage({
      path: `/${project.slug}/`,
      component: require.resolve('./src/templates/project.tsx'),
      context: {
        slug: project.slug,
      },
    })
  })
}

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        styles: path.resolve(__dirname, 'src/styles'),
        types: path.resolve(__dirname, 'src/types'),
      },
    },
  })
}
