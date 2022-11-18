import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ProductImage from '../ProductImage';
import BoxImg from '../BoxImg';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import ProductInfo from '../ProductViewMobile/ProductInfo';

const ProductItemWrap = styled.div``;

const PrimaryBoxImg = styled(BoxImg)`
  max-width: 20vmin;
  img {
    max-width: 20vmin;
  }
  margin-bottom: 2rem;
`;

const ProductImageThumb = styled(ProductImage)`
  margin-top: 1.5rem;
  max-width: 30vmin;
  max-height: 30vmin;
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          box-shadow: 0px 2px 5px ${theme.primary};
        `
      : css`
          outline: 1px solid rgba(0, 0, 0, 0.1);
        `}
`;

const LowerContent = styled.div`
  position: relative;
  div[class^='Button'] {
    position: absolute;
    bottom: 4rem;
    left: -14rem;
  }
`;

const LowerImage = styled(ProductImage)`
  max-width: 20vmin;
  max-height: 20vmin;
  margin-left: -8rem;
  margin-top: -5rem;
`;

const FadeInStyles = styled(FadeIn)``;

const SmallImageSection = styled.div`
  @media (max-width: 812px) {
    display: none;
  }
`;

const ProductAlt = ({ product, profile, className, item }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ProductItemWrap className={className} ref={containerRef}>
      <FadeInStyles delay={(item + 1) * 500} duration={600} isVisible={isVisible}>
        <SmallImageSection>
          <PrimaryBoxImg dir="left">
            <ProductImageThumb src={product.productImages[0]} alt={product.item} />
          </PrimaryBoxImg>
        </SmallImageSection>
        <ProductInfo
          brand={product.brand}
          item={product.item}
          price={product.price}
          advice={product.advice}
          cta={product.link}
          shopper={`${profile.firstName} ${profile.lastName}`}
          shopperId={profile.shopperId}
        />
        <LowerContent>
          <LowerImage className="tpsa-pa-lower-img" src={product.productImages[1]} alt={product.item} />
        </LowerContent>
      </FadeInStyles>
    </ProductItemWrap>
  );
};

ProductAlt.propTypes = {
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

export default ProductAlt;
