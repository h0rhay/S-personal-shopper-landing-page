import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ProductImage from '../ProductImage';
import ProductThumb from './ProductThumb';
import BoxImg from '../BoxImg';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import ProductInfo from '../ProductViewMobile/ProductInfo';

const ProductItemWrap = styled.div`
  @media (min-height: 890px) {
    margin-top: 10rem;
  }
  @media (max-height: 750px) {
    margin-top: 0rem;
  }
  margin-top: 5rem;
`;

const ProductInformation = styled(ProductInfo)`
  padding-right: 1rem;
`;

const PrimaryProductImage = styled(ProductImage)`
  aspect-ratio: 1;
  min-width: 20rem;
`;

const TopImageInfo = styled.div`
  display: flex;
  justify-content: flex-end;
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

const ProductBoxImg = styled(BoxImg)`
  display: inline-block;
`;

const ProductAlt = ({ product, profile, className, item }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductItemWrap className={className}>
      <TopImageInfo ref={containerRef}>
        <FadeIn delay={(item + 1) * 300} duration={500} isVisible={isVisible}>
          <PrimaryProductImage src={product.productImages[0]} alt={product.item} />
        </FadeIn>
      </TopImageInfo>

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
        <FadeIn delay={(item + 1) * 300} duration={500} isVisible={isVisible}>
          <ProductBoxImg>
            <ProductThumbStyles src={product.productImages[1]} alt={product.item} item={item} />
          </ProductBoxImg>
        </FadeIn>
      </ImageAndInfo>
    </ProductItemWrap>
  );
};

ProductAlt.propTypes = {
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

export default ProductAlt;
