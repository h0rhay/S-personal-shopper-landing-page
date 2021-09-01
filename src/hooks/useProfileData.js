import { useStaticQuery, graphql } from 'gatsby';

const useProfileData = () => {
  const data = useStaticQuery(graphql`
    {
      mdx {
        frontmatter {
          title
          slug
        }
        body
      }
    }
  `);

  const frontmatter = data.mdx.frontmatter;
  const body = data.mdx.body;

  return {
    frontmatter,
    body
  };
};

export default useProfileData;
