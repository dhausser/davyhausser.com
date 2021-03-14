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

// // https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /scrollreveal/,
//             use: loaders.null(),
//           },
//           {
//             test: /animejs/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }

//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         '@components': path.resolve(__dirname, 'src/components'),
//         '@config': path.resolve(__dirname, 'src/config'),
//         '@fonts': path.resolve(__dirname, 'src/fonts'),
//         '@hooks': path.resolve(__dirname, 'src/hooks'),
//         '@images': path.resolve(__dirname, 'src/images'),
//         '@pages': path.resolve(__dirname, 'src/pages'),
//         '@styles': path.resolve(__dirname, 'src/styles'),
//         '@utils': path.resolve(__dirname, 'src/utils'),
//         '@types': path.resolve(__dirname, 'src/types'),
//       },
//     },
//   })
// }
