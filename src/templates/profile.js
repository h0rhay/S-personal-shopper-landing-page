import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css, ThemeContext } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';
import PageHeader from '../components/PageHeader';
import SiteWidthWrapper from '../components/SiteWidthWrapper';
import Hero from '../components/Hero';
import HeadingWithLine from '../components/HeadingWithLine';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import ThreeProductSection from '../components/ThreeProductSection/ThreeProductSection';
import ThreeProductSectionAlt from '../components/ThreeProductSectionAlt/ThreeProductSectionAlt';
import TwoProductSection from '../components/TwoProductSection/TwoProductSection';
import TwoProductSectionAlt from '../components/TwoProductSectionAlt/TwoProductSectionAlt';
import MoreShopper from '../components/MoreShoppers/moreShopper';
import MoreShopperCarousel from '../components/MoreShoppers/moreShopperCarousel';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import ProductViewMobile from '../components/ProductViewMobile';
import Share from '../components/Share';
import Breakpoints from '../theme/breakpoints';
import { isEmpty } from '../utils';

const Main = styled.main`
  height: 100%;
  ${({ theme }) => css`
    @media ${theme.breakpoints.deviceSwitchLg} {
      height: 100vh;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      overflow-y: scroll;
      @media (min-height: 755px) {
        > article:first-of-type {
          height: 80vh;
        }
      }
      > article {
        height: 100vh;
        scroll-snap-align: start;
        overflow: hidden;
      }
      > article:last-of-type {
        > div {
          height: calc(100vh - 5.625rem);
          overflow: scroll;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    } ;
  `}
`;

const HeadingWrap = styled.div`
  position: relative;
`;

const LowerHeadingWithLineStyles = styled(HeadingWithLine)`
  @media (max-width: 812px) {
    font-size: 2.5rem;
    margin-top: 0;
    word-wrap: break-word;
    width: 75%;
    margin-top: 0;
    &:before {
      top: -2rem;
    }
  }
`;

const LowerShare = styled.div`
  button {
    top: 35%;
    left: unset;
    right: 4rem;
    @media (max-width: 896px) {
      top: 7%;
      right: 1rem;
    }
  }
`;

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        firstName
        lastName
        shopperId
        title
        slug
        bio
        loveQuote
        profileImage {
          relativePath
          childImageSharp {
            original {
              src
            }
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        expertise
        interests {
          interest
        }
        twitter
        insta
        facebook
        email
        sectionTitle1
        sectionTitle2
        sectionTitle3
        sectionTitle4
        sectionTitle5
        products {
          id
          price
          item
          brand
          link
          advice
          featured
          range
          socialImage {
            childImageSharp {
              gatsbyImageData(width: 800, quality: 50, placeholder: TRACED_SVG, formats: [AUTO, WEBP])
            }
          }
          socialImageLink
          productImages
        }
      }
    }
    shoppers: allMdx(filter: { slug: { ne: $slug } }) {
      nodes {
        id
        frontmatter {
          firstName
          lastName
          title
          slug
          expertise
          profileImage {
            relativePath
            childImageSharp {
              original {
                src
              }
              fluid(quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const ProfileTemplate = ({ data: { mdx: profile, shoppers } }) => {
  const theme = useContext(ThemeContext);
  const threeProducts = profile.frontmatter.products.slice(1, 4);
  const twoProducts = profile.frontmatter.products.slice(4, 6);
  const threeProductsAlt = profile.frontmatter.products.slice(6, 9);
  const twoProductsAlt = profile.frontmatter.products.slice(9, 11);
  const productsAmount = profile.frontmatter.products.length;

  const isTabletOrMobile = useMediaQuery({ query: `${Breakpoints.deviceSwitchSm}` });

  const shuffledShoppers = (array) => array.sort(() => Math.random() - 0.5);
  const threeShoppers = shuffledShoppers(shoppers.nodes).slice(0, 3);
  return (
    <>
      <Helmet
        title={`${profile.frontmatter.firstName} ${profile.frontmatter.lastName} | Luxury Personal Shopper - Selfridges`}
      />
      <PageHeader contact={profile.frontmatter.email} />
      <Main className={profile.frontmatter.slug}>
        <article>
          <Hero {...profile} />
          <SiteWidthWrapper>
            <HeadingWithLine text="Top Picks" color={theme.accent} line />
          </SiteWidthWrapper>
        </article>
        {isTabletOrMobile && (
          <div>
            <SiteWidthWrapper>
              <ProductViewMobile frontmatter={profile.frontmatter} />
            </SiteWidthWrapper>
          </div>
        )}
        {!isTabletOrMobile && (
          <>
            {!isEmpty(profile.frontmatter.products) && (
              <article>
                <SiteWidthWrapper>
                  <FeaturedProduct
                    products={profile.frontmatter.products}
                    productsAmount={productsAmount}
                    {...profile}
                  />
                </SiteWidthWrapper>
              </article>
            )}
            {!isEmpty(threeProducts) && (
              <article>
                <SiteWidthWrapper>
                  <ThreeProductSection products={threeProducts} productsAmount={productsAmount} {...profile} />
                </SiteWidthWrapper>
              </article>
            )}
            {!isEmpty(twoProducts) && (
              <article>
                <SiteWidthWrapper>
                  <TwoProductSection products={twoProducts} productsAmount={productsAmount} {...profile} />
                </SiteWidthWrapper>
              </article>
            )}
            {!isEmpty(threeProductsAlt) && (
              <article>
                <SiteWidthWrapper>
                  <ThreeProductSectionAlt products={threeProductsAlt} productsAmount={productsAmount} {...profile} />
                </SiteWidthWrapper>
              </article>
            )}
            {!isEmpty(twoProductsAlt) && (
              <article>
                <SiteWidthWrapper>
                  <TwoProductSectionAlt products={twoProductsAlt} productsAmount={productsAmount} {...profile} />
                </SiteWidthWrapper>
              </article>
            )}
          </>
        )}
        <article>
          <SiteWidthWrapper>
            <HeadingWrap>
              <LowerHeadingWithLineStyles
                text="More Shoppers"
                color={theme.accent}
                line
                lineHeight="10"
                space="7"
                position="-4"
              />
              <LowerShare>
                <Share />
              </LowerShare>
            </HeadingWrap>
            {isTabletOrMobile && <MoreShopperCarousel shoppers={threeShoppers} />}
            {!isTabletOrMobile && <MoreShopper shoppers={threeShoppers} />}
          </SiteWidthWrapper>
          <Footer />
        </article>
        <CookieConsent />
      </Main>
    </>
  );
};

ProfileTemplate.propTypes = {
  data: PropTypes.object,
};

export default ProfileTemplate;
