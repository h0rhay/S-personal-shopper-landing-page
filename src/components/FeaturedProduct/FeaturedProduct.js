import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainSocialImageSection from './MainSocialImageSection';
import PrimaryProductImageSection from './PrimaryProductImageSection';
import SecondaryProductImageSection from './SecondaryProductImageSection';
import DisplayHeading from '../DisplayHeading';

const FeaturedProductWrap = styled.section`
  height: 100vh;
  padding-top: 3vmax;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 960px) {
    display: block;
    padding-top: 8vmax;
  }
`;

const DisplayHeadingStyles = styled(DisplayHeading)``;

const FeaturedProduct = ({ frontmatter: profile, products }) => {
  const [featuredProduct] = products.filter((product) => product.featured);

  return (
    <FeaturedProductWrap>
      <MainSocialImageSection featuredProduct={featuredProduct} profile={profile} products={products} />
      <PrimaryProductImageSection featuredProduct={featuredProduct} profile={profile} />
      <SecondaryProductImageSection featuredProduct={featuredProduct} />
      <DisplayHeadingStyles>{profile.sectionTitle1}</DisplayHeadingStyles>
    </FeaturedProductWrap>
  );
};

FeaturedProduct.propTypes = {
  products: PropTypes.array,
  frontmatter: PropTypes.object,
};

export default FeaturedProduct;
