import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import ProductInfo from '../ProductViewMobile/ProductInfo';

const SocialImageWrap = styled.div`
  position: relative;
  max-width: 28vmax;
`;

const RangeLabel = styled.p`
  font-family: 'DINNextLTPro-Medium';
  text-transform: uppercase;
  position: absolute;
  top: -2rem;
  left: -2rem;
`;

const SocialImage = styled(GatsbyImage)`
  margin: 0 auto;
  width: 28vmax;
  * {
    margin: 0;
  }
`;

const MainSocialImageSection = ({ featuredProduct, profile }) => {
  const image = getImage(featuredProduct.socialImage);
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <SocialImageWrap ref={containerRef}>
      <RangeLabel>{featuredProduct.range}</RangeLabel>

      <FadeIn delay={300} duration={750} isVisible={isVisible}>
        {featuredProduct.socialImage && (
          <SocialImage image={image} alt={`instagram-pic-${featuredProduct.item}`} className="g-image " />
        )}
        <ProductInfo
          brand={featuredProduct.brand}
          item={featuredProduct.item}
          price={featuredProduct.price}
          advice={featuredProduct.advice}
          cta={featuredProduct.link}
          shopper={`${profile.firstName} ${profile.lastName}`}
          shopperId={profile.shopperId}
        />
      </FadeIn>
    </SocialImageWrap>
  );
};

MainSocialImageSection.propTypes = {
  featuredProduct: PropTypes.shape({
    brand: PropTypes.string,
    advice: PropTypes.string,
    item: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
    range: PropTypes.string,
    socialImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }),
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    shopperId: PropTypes.number,
  }),
};

export default MainSocialImageSection;
