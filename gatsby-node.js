const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/showcase/`,
    isPermanent: true,
    force: true,
  });

  const showcaseTemplate = path.resolve(
    `src/templates/template-showcase-details.js`
  );
  const blogPostTemplate = path.resolve(
    `./src/templates/template-blog-post.js`
  );
  const result = await graphql(`
    {
      allSitesYaml {
        edges {
          node {
            slug
          }
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const projects = result.data.allSitesYaml.edges.map(({ node }) => node);
  const posts = result.data.allMdx.edges;

  projects.forEach((project) => {
    createPage({
      path: `/showcase/${project.slug}`,
      component: showcaseTemplate,
      context: {
        slug: project.slug,
      },
    });
  });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
