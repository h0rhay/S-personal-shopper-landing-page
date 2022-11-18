import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ProductImageComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ pos }) => (pos === 'mid' ? 'space-evenly' : pos === 'end' ? 'flex-end' : 'flex-start')};
  margin: 1rem 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 70%;
  &:before {
    content: '';
    position: absolute;
    top: ${({ pos }) => (pos === 'mid' ? '-10px' : pos === 'end' ? '-10px' : '-10px')};
    left: ${({ pos }) => (pos === 'mid' ? '-10px' : pos === 'end' ? '-10px' : '10px')};
    right: ${({ pos }) => (pos === 'mid' ? '10px' : pos === 'end' ? '10px' : '-10px')};
    bottom: ${({ pos }) => (pos === 'mid' ? '10px' : pos === 'end' ? '10px' : '10px')};
    border: ${({ pos }) => (pos === 'mid' ? '0px' : '1px')} solid ${({ theme }) => theme.accent};
    z-index: -1;
  }
`;

const ProductImage = ({ src, alt, pos = 'start' }) => (
  <ProductImageComponent pos={pos}>
    <ImageWrapper pos={pos}>
      <img loading="lazy" src={src} alt={alt} />
    </ImageWrapper>
  </ProductImageComponent>
);

ProductImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  pos: PropTypes.oneOf(['start', 'mid', 'end']),
};

export default ProductImage;
