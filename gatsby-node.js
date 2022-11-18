const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((profile) => {
    actions.createPage({
      path: profile.frontmatter.slug,
      component: path.resolve('./src/templates/profile.js'),
      context: {
        slug: profile.frontmatter.slug,
      },
    });
  });
};
