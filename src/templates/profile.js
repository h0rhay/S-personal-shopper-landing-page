import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/hero';
import ProductList from '../components/productList';
import SiteWidthWrapper from '../components/siteWidthWrapper';
import Footer from '../components/footer';

const Heading = styled.section`
    margin: 4rem 0;
    text-align: center;
`;

export const query = graphql`
    query ($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                slug
                description
                profileImage {
                    childImageSharp {
                        fluid(maxWidth: 400, maxHeight: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                headerImage {
                    childImageSharp {
                        fluid(maxWidth: 1400, maxHeight: 778) {
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
                alt={profile.frontmatter.title}
                title={profile.frontmatter.title}
                description={profile.frontmatter.description}
            />

            <SiteWidthWrapper>
                <Heading>
                    <h2>{profile.frontmatter.title} Top Picks</h2>
                </Heading>
                <ProductList products={profile.frontmatter.products} />
            </SiteWidthWrapper>

            <Footer />
        </Layout>
    </>
);

export default ProfileTemplate;
