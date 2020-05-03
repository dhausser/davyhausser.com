const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/showcase/`,
    isPermanent: true,
    force: true
  })

  const projectTemplate = path.resolve(`src/templates/project.js`)
  // const blogPostTemplate = path.resolve(`src/templates/blog.js`)

  const result = await graphql(`
    {
      allSitesYaml {
        edges {
          node {
            slug
          }
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projects = result.data.allSitesYaml.edges.map(({ node }) => node)
  // const blogs = result.data.allMarkdownRemark.edges.map(({ node }) => node)

  projects.forEach(project => {
    actions.createPage({
      path: `/showcase/${project.slug}`,
      component: projectTemplate,
      context: {
        slug: project.slug
      }
    })
  })

  // blogs.forEach(blog => {
  //   createPage({
  //     path: blog.frontmatter.path,
  //     component: blogPostTemplate,
  //     context: {}
  //   })
  // })
}
