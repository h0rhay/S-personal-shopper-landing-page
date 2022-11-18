import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductImage from '../ProductImage';
import BoxImg from '../BoxImg';
import ProductThumb from './ProductThumb';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import ProductInfo from '../ProductViewMobile/ProductInfo';

const ProductItemWrap = styled.div`
  display: flex;
  height: 100%;
`;

const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70%;
`;
const SecondCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 5vmin 0 0;
  width: 100%;
`;

const PrimaryProductImage = styled(ProductImage)`
  max-height: 40vmin;
  max-width: 40rem;
`;

const PrimaryBoxImg = styled(BoxImg)`
  max-width: 34vmin;
  img {
    max-width: 34vmin;
  }
  @media (min-width: 1500px) {
    max-width: 24vmin;
    img {
      max-width: 24vmin;
    }
  }
  @media (max-width: 860px) {
    max-width: 24vmin;
    img {
      max-width: 24vmin;
    }
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
      <FirstCol>
        <div>
          <PrimaryBoxImg>
            <ProductThumb src={product.productImages[1]} alt={product.item} item={item} />
          </PrimaryBoxImg>
          <ProductInfo
            brand={product.brand}
            item={product.item}
            price={product.price}
            advice={product.advice}
            cta={product.link}
            shopper={`${profile.firstName} ${profile.lastName}`}
            shopperId={profile.shopperId}
          />
        </div>
      </FirstCol>
      <SecondCol ref={containerRef}>
        <FadeIn delay={(item + 1) * 400} duration={500} isVisible={isVisible}>
          <PrimaryProductImage src={product.productImages[0]} alt={product.item} />
        </FadeIn>
      </SecondCol>
    </ProductItemWrap>
  );
};

Product.propTypes = {
  className: PropTypes.string,
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
