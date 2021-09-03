import { graphql, useStaticQuery } from 'gatsby';

const useProfiles = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            profileImage {
              childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#333333", highlight: "#ffe256" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            headerImage {
              childImageSharp {
                fluid(
                  maxWidth: 1400
                  maxHeight: 778
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    profileImage: post.frontmatter.profileImage,
    headerImage: post.frontmatter.headerImage,
  }));
};

export default useProfiles;
