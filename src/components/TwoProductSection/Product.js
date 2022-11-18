import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ProductImage from '../ProductImage';
import ProductThumb from './ProductThumb';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import ProductInfo from '../ProductViewMobile/ProductInfo';

const ProductItemWrap = styled.div``;

const PrimaryProductImage = styled(ProductImage)`
  aspect-ratio: 1;
  margin-left: 1.5rem;
  min-width: 20rem;
`;

const ProductInformation = styled(ProductInfo)`
  padding-right: 1rem;
`;

const ImageAndInfo = styled.div`
  margin-top: -2rem;
  display: flex;
  gap: 5px;
  > div {
    flex: 1;
  }
  h3 {
    margin-top: 2rem;
  }
  ${({ theme }) => css`
    @media ${theme.breakpoints.medium} {
      div[class^='ProductInfo__InfoWrapper'] {
        margin-top: 2rem;
      }
    }
  `}
`;

const ProductThumbStyles = styled(ProductThumb)`
  @media (max-width: 812px) {
    flex: 0 1 50% !important;
  }
`;

const Product = ({ product, profile, className, item }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductItemWrap className={className}>
      <div ref={containerRef}>
        <FadeIn delay={(item + 1) * 300} duration={500} isVisible={isVisible}>
          <PrimaryProductImage src={product.productImages[0]} alt={product.item} />
        </FadeIn>
      </div>

      <ImageAndInfo>
        <ProductInformation
          brand={product.brand}
          item={product.item}
          price={product.price}
          advice={product.advice}
          cta={product.link}
          shopper={`${profile.firstName} ${profile.lastName}`}
          shopperId={profile.shopperId}
        />
        <ProductThumbStyles src={product.productImages[1]} alt={product.item} item={item} />
      </ImageAndInfo>
    </ProductItemWrap>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  item: PropTypes.number,
  product: PropTypes.shape({
    advice: PropTypes.string,
    id: PropTypes.number,
    item: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    productImages: PropTypes.array,
  }),
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    shopperId: PropTypes.number,
  }),
};

export default Product;
