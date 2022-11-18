import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductImage from '../ProductImage';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import ProductInfo from '../ProductViewMobile/ProductInfo';

const ProductItemWrap = styled.div`
  @media (min-width: 813px) {
    max-width: 15rem;
  }
  @media (max-width: 812px) {
    margin-top: 2rem;
  }
`;

const Product = ({ product, profile, item }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductItemWrap ref={containerRef}>
      <FadeIn delay={(item + 1) * 300} duration={500} isVisible={isVisible}>
        <ProductImage src={product.productImages[0]} alt={product.item} />
      </FadeIn>

      <ProductInfo
        brand={product.brand}
        item={product.item}
        price={product.price}
        advice={product.advice}
        cta={product.link}
        shopper={`${profile.firstName} ${profile.lastName}`}
        shopperId={profile.shopperId}
      />
    </ProductItemWrap>
  );
};

Product.propTypes = {
  item: PropTypes.number,
  product: PropTypes.shape({
    advice: PropTypes.string,
    brand: PropTypes.string,
    id: PropTypes.number,
    item: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
    productImages: PropTypes.array,
  }),
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    shopperId: PropTypes.number,
  }),
};

export default Product;
