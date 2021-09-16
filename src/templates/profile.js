import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled  from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/hero';
import SiteWidthWrapper from '../components/siteWidthWrapper';

const TopSection = styled.section`
  display:flex;
  .gatsby-image-wrapper {
    width:100%;
  }
  img {
    * {
      margin-top: 0;
    }
  }
  p {
    max-width:40ch;
    margin-left: 2rem;
  }
`

const ProductList = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
  display:flex;
  flex:1;
  li {
    width:50%;
    display:flex;
    flex:1;
    a {
      width:100%;
      display:flex;
      align-items: center;
      justify-content:center;
      flex-direction:column;
      text-decoration: none;
      img {
        max-width:8rem;
      }
    }
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        description
        profileImage {
          childImageSharp {
            fluid(
              maxWidth: 400
              maxHeight: 400
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
        twitter
        insta
        facebook
        email
        products {
          item
          image
          link
        }
      }
      body
    }
  }
`;

const ProfileTemplate = ({ data: { mdx: profile } }) => (
  <>
    <Layout>
      <Hero 
        img={profile.frontmatter.profileImage.childImageSharp.fluid} 
        alt={profile.title}
        title={profile.frontmatter.title}
        description={profile.frontmatter.description}
      />
      <SiteWidthWrapper>
        <ProductList>
          {profile.frontmatter.products && 
            profile.frontmatter.products.map((product, i) => {
              return (
                <li>
                  <a href={product.link}>
                    <h3>{product.item}</h3>
                    <img 
                      src={product.image} 
                      alt={product.item.toLowerCase()}
                      />
                  </a>
                </li>
              )
            })
          }
        </ProductList>
      </SiteWidthWrapper>
    </Layout>
  </>
);

export default ProfileTemplate;
