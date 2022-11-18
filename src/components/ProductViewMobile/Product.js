import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import ProductImageCarousel from './productImageCarousel';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const ProductWrapper = styled.div`
  margin: 0.5rem;
`;

const Product = ({ product, profile, index }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductWrapper ref={containerRef}>
      {product.featured && (
        <FadeIn delay={(index + 1) * 100} duration={300} isVisible={isVisible}>
          <ProductImageCarousel
            productImages={product.productImages}
            socialImage={product.socialImage}
            altText={product.item}
          />
        </FadeIn>
      )}
      {!product.featured && product.productImages.length > 1 && (
        <FadeIn delay={(index + 1) * 100} duration={300} isVisible={isVisible}>
          <ProductImageCarousel
            productImages={product.productImages}
            socialImage={product.socialImage}
            altText={product.item}
          />
        </FadeIn>
      )}
      {!product.featured && product.productImages.length <= 1 && (
        <FadeIn delay={(index + 1) * 100} duration={300} isVisible={isVisible}>
          <ProductImage
            src={product.productImages[0]}
            alt={product.item}
            pos={index % 3 === 0 ? 'start' : index % 3 === 1 ? 'mid' : 'end'}
          />
        </FadeIn>
      )}
      <ProductInfo
        brand={product.brand}
        item={product.item}
        price={product.price}
        advice={product.advice}
        cta={product.link}
        shopper={`${profile.firstName} ${profile.lastName}`}
        shopperId={profile.shopperId}
      />
    </ProductWrapper>
  );
};

Product.propTypes = {
  index: PropTypes.number,
  product: PropTypes.shape({
    advice: PropTypes.string,
    brand: PropTypes.string,
    featured: PropTypes.bool,
    item: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
    productImages: PropTypes.array,
    socialImage: PropTypes.object,
  }),
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    shopperId: PropTypes.number,
  }),
};

export default Product;
