import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ProductImageComponent = styled.img`
  max-height: 18.75rem;
  object-fit: cover;
  display: block;
  position: relative;
  max-width: 21vmin;
`;

const ProductImage = ({ src, alt, className }) => (
  <ProductImageComponent loading="lazy" src={src} alt={alt} className={className} />
);

ProductImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
};

export default ProductImage;
