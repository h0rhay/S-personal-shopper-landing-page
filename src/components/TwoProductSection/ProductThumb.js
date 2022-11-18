import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import ProductImage from '../ProductImage';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const ProductImageThumb = styled(ProductImage)`
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          box-shadow: 0px 2px 5px ${theme.shadow};
        `
      : css`
          outline: 1px solid rgba(0, 0, 0, 0.1);
        `}
`;

const ProductThumb = ({ alt, src, item, ...delegated }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <div {...delegated} ref={containerRef}>
      <FadeIn delay={(item + 1) * 400} duration={600} isVisible={isVisible}>
        <ProductImageThumb src={src} alt={alt} />
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
