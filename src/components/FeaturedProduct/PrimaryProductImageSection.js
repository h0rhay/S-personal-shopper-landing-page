import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FadeIn from '../fadeIn';
import ProductImage from '../ProductImage';
import Button from '../Button';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import BoxImg from '../BoxImg';

const ProductImageWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 22vh;
  @media (max-width: 960px) {
    bottom: 12vmin;
    left: 17vmin;
  }
`;

const CtaButton = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
  margin-top: 1rem;
`;

const BoxImgStyle = styled(BoxImg)``;

const ProductItemLabel = styled.p`
  font-family: 'DINNextLTPro-Medium';
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const PrimaryProductImageSection = ({ featuredProduct, profile }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductImageWrap ref={containerRef}>
      <FadeIn delay={500} duration={900} isVisible={isVisible}>
        <BoxImgStyle dir="right">
          <ProductImage src={featuredProduct.productImages[0]} alt={featuredProduct.item} />
        </BoxImgStyle>
      </FadeIn>
      <CtaButton>
        <ProductItemLabel>{featuredProduct.price}</ProductItemLabel>
        <Button href={featuredProduct.link} shopperId={profile.shopperId} target="_blank" rel="noopener noreferrer">
          Shop now
        </Button>
      </CtaButton>
    </ProductImageWrap>
  );
};

PrimaryProductImageSection.propTypes = {
  featuredProduct: PropTypes.shape({
    productImages: PropTypes.array,
    item: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
  }),
  profile: PropTypes.shape({
    shopperId: PropTypes.number,
  }),
};

export default PrimaryProductImageSection;
