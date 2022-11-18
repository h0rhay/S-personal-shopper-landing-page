import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import ProductImage from '../ProductImage';
import BoxImg from '../BoxImg';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const ProductImageThumb = styled(ProductImage)`
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          box-shadow: 0px 2px 5px ${theme.primary};
        `
      : css`
          outline: 1px solid rgba(0, 0, 0, 0.1);
        `}
`;

const ProductThumb = ({ alt, src, item }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <div ref={containerRef}>
      <FadeIn delay={(item + 1) * 100} duration={400} isVisible={isVisible}>
        <BoxImg>
          <ProductImageThumb src={src} alt={alt} />
        </BoxImg>
      </FadeIn>
    </div>
  );
};

ProductThumb.propTypes = {
  alt: PropTypes.string,
  item: PropTypes.number,
  src: PropTypes.string,
};

export default ProductThumb;
