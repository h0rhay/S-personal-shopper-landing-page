import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import Hero from '../components/hero';

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
    <Hero image={profile.frontmatter.headerImage.childImageSharp.fluid}/>
    <Layout>
      <h1>{profile.frontmatter.title}</h1>
      <div
        css={css`
          display:flex;
        `}
      >
        <Image
          fluid={profile.frontmatter.profileImage.childImageSharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
            width:100%;
          `}
          alt={profile.title}
        />
        <p
          css={css`
            max-width:40ch;
            margin-left: 2rem;
          `}
        >{profile.frontmatter.description}</p>
      </div>
      <section>
        <ul
          css={css`
            list-style-type:none;
            margin:0;
            padding:0;
            display:flex;
            
            flex:1;
          `}
        >
          {profile.frontmatter.products && 
            profile.frontmatter.products.map((product, i) => {
              return (
                <li 
                  key={`product-${i}`}
                  css={css`
                    width:50%;
                    display:flex;
                    flex:1;
                  `}
                >
                  <a 
                    href={product.link}
                    css={css`
                      width:100%;
                      display:flex;
                      align-items: center;
                      justify-content:center;
                      flex-direction:column;
                      text-decoration: none;
                    `}
                  >
                    <h3>{product.item}</h3>
                    <img 
                      src={product.image} 
                      alt={product.item.toLowerCase()}
                      css={css`
                        max-width:8rem;
                      `}
                    />
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section>
    </Layout>
  </>
);

export default ProfileTemplate;
