import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FadeIn from '../fadeIn';
import ProductImage from '../ProductImage';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const ProductInfoWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 11vh;
  p {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2.25px;
    line-height: 25px;
    margin-bottom: 1rem;
  }
  @media (max-width: 960px) {
    bottom: 12vmin;
    right: 8vmin;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 960px) {
    justify-content: flex-start;
  }
`;

const SecondaryProductImageSection = ({ featuredProduct }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductInfoWrap ref={containerRef}>
      <FadeIn delay={1000} duration={1100} isVisible={isVisible}>
        <ImageWrap>
          <ProductImage src={featuredProduct.productImages[1]} alt={featuredProduct.item} />
        </ImageWrap>
      </FadeIn>
    </ProductInfoWrap>
  );
};

SecondaryProductImageSection.propTypes = {
  featuredProduct: PropTypes.shape({
    brand: PropTypes.string,
    item: PropTypes.string,
    productImages: PropTypes.array,
  }),
};

export default SecondaryProductImageSection;
