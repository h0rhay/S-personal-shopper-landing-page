import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';
import ProductAlt from './ProductAlt';
import DisplayHeading from '../DisplayHeading';

const TwoProductWrap = styled.section`
  position: relative;
  padding: 10vmin 0 2vmin 0;
  display: flex;
  height: 100vh;
`;

const Col = styled.div`
  &:first-of-type {
    width: 70%;
  }
  &:last-of-type {
    width: 30%;
  }
`;

const DisplayHeadingStyles = styled(DisplayHeading)``;

const TwoProductSection = ({ products, frontmatter: profile }) => (
  <TwoProductWrap>
    {products.map((product, i) => (
      <Col key={product.id}>
        {i === 0 ? (
          <Product product={product} profile={profile} item={i} />
        ) : (
          <ProductAlt product={product} profile={profile} item={i} />
        )}
      </Col>
    ))}
    <DisplayHeadingStyles>{profile.sectionTitle5}</DisplayHeadingStyles>
  </TwoProductWrap>
);

TwoProductSection.propTypes = {
  frontmatter: PropTypes.object,
  products: PropTypes.array,
};

export default TwoProductSection;
