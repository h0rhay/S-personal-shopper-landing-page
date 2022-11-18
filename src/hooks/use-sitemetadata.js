import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
      metaImage: file(relativePath: { eq: "selfridges-personal-shopper-social.png" }) {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
    }
  `);

  return { ...data.site.siteMetadata, ...data.metaImage.childImageSharp.resize };
};

export default useSiteMetadata;
