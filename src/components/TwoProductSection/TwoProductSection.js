import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';
import ProductAlt from './ProductAlt';
import DisplayHeading from '../DisplayHeading';

const TwoProductWrap = styled.section`
  position: relative;
  display: flex;
  gap: 3rem;
  height: 100vh;
  padding: 8rem 0 4rem 0;
  @media (max-height: 690px) {
    padding-top: 4rem;
  }
`;

const Col = styled.div`
  flex: 1;
`;

const DisplayHeadingStyles = styled(DisplayHeading)``;

const TwoProductSection = ({ products, productsAmount, frontmatter: profile }) => (
  <TwoProductWrap>
    {products.map((product, i) => (
      <Col key={product.id}>
        {i === 0 ? (
          <Product product={product} profile={profile} amount={productsAmount} item={i} />
        ) : (
          <ProductAlt product={product} profile={profile} amount={productsAmount} item={i} />
        )}
      </Col>
    ))}
    <DisplayHeadingStyles>{profile.sectionTitle3}</DisplayHeadingStyles>
  </TwoProductWrap>
);

TwoProductSection.propTypes = {
  frontmatter: PropTypes.object,
  products: PropTypes.array,
  productsAmount: PropTypes.number,
};

export default TwoProductSection;
