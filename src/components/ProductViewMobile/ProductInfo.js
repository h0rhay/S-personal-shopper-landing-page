import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button';

const InfoWrapper = styled.div`
  * {
    margin: 0;
  }
  h2 {
    letter-spacing: 5px;
  }
  h2,
  > div {
    margin-top: 1rem;
  }
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media ${theme.breakpoints.large} {
      margin-top: 1rem;
    }
  `}

  .price {
    font-family: 'DINNextLTPro-Medium';
    letter-spacing: 2px;
  }
  .quote {
    border-left: 1px solid ${({ theme }) => theme.accent};
    padding: 0 1rem;
  }
  .advice {
    font-family: 'DINNextLTPro-Medium';
  }
  .cta {
    a {
      float: right;
    }
    margin-bottom: 2rem;
  }
`;

const ProductInfo = ({ brand, item, price, advice, cta, shopper, shopperId, ...delegated }) => (
  <InfoWrapper {...delegated}>
    <h2 className="productHeading">{brand}</h2>
    <div>{item}</div>
    <div className="price">{price}</div>
    <div className="quote">
      <div className="advice">“ {advice} “</div>
      <div>- {shopper}</div>
    </div>
    <div className="cta">
      <Button href={cta} shopperId={shopperId} target="_blank" rel="noopener noreferrer">
        Shop now
      </Button>
    </div>
  </InfoWrapper>
);

ProductInfo.propTypes = {
  brand: PropTypes.string,
  item: PropTypes.string,
  price: PropTypes.string,
  advice: PropTypes.string,
  cta: PropTypes.string,
  shopper: PropTypes.string,
  shopperId: PropTypes.number,
};

export default ProductInfo;
