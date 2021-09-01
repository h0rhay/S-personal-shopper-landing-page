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

  const profiles = result.data.allMdx.nodes;

  profiles.forEach(profile => {
    actions.createPage({
      path: profile.frontmatter.slug,
      component: require.resolve('./src/templates/profile.js'),
      context: {
        slug: profile.frontmatter.slug,
      },
    });
  });
};
