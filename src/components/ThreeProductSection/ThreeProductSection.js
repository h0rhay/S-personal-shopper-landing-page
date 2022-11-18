import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';
import DisplayHeading from '../DisplayHeading';

const ThreeProductWrap = styled.article`
  position: relative;
  padding: 6rem 0;
  display: flex;
  height: 100vh;
`;

const Col = styled.div`
  flex: 1;
  display: flex;

  &:nth-child(1) {
    align-items: center;
    justify-content: flex-start;
  }
  &:nth-child(2) {
    align-items: flex-end;
    justify-content: center;
    div[class^='fadeIn__Wrapper'] {
      display: flex;
      justify-content: center;
    }
  }
  &:nth-child(3) {
    align-items: flex-start;
    justify-content: flex-end;
    p[class^='Product__ProductItemLabel'] {
      text-align: right;
    }
    div[class^='fadeIn__Wrapper'] {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: 812px) {
    width: 80%;
    h2 {
      text-align: left;
    }
    div[class^='Product__ButtonWrap'] {
      justify-content: flex-start;
    }
    &:nth-of-type(even) {
      margin-left: 20%;
      h2,
      p {
        text-align: right;
      }
      div[class^='Product__ButtonWrap'] {
        justify-content: flex-end;
      }
    }
  }
`;

const DisplayHeadingStyles = styled(DisplayHeading)`
  display: none;
  @media (min-width: 813px) {
    display: block;
  }
`;

const ThreeProductSection = ({ products, frontmatter: profile }) => (
  <ThreeProductWrap>
    {products.map((product, i) => (
      <Col key={product.id}>
        <Product product={product} profile={profile} item={i} />
      </Col>
    ))}
    <DisplayHeadingStyles>{profile.sectionTitle2}</DisplayHeadingStyles>
  </ThreeProductWrap>
);

ThreeProductSection.propTypes = {
  frontmatter: PropTypes.object,
  products: PropTypes.array,
};

export default ThreeProductSection;
