import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';
import DisplayHeading from '../DisplayHeading';

const ThreeProductWrap = styled.section`
  position: relative;
  @media (min-width: 813px) {
    padding: 6rem 0;
    display: flex;
    height: 100vh;
  }
`;

const Col = styled.div`
  @media (min-width: 813px) {
    flex: 1;
    display: flex;
  }

  &:nth-child(1) {
    align-items: flex-start;
    justify-content: flex-start;
  }
  &:nth-child(2) {
    align-items: flex-end;
    justify-content: center;
    @media (min-width: 813px) {
      div[class^='fadeIn__Wrapper'] {
        display: flex;
        justify-content: center;
      }
    }
  }
  &:nth-child(3) {
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 813px) {
      p[class^='Product__ProductItemLabel'] {
        text-align: right;
      }
      div[class^='fadeIn__Wrapper'] {
        display: flex;
        justify-content: flex-end;
      }
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
  @media (max-width: 812px) {
    margin-top: 4rem;
    display: block;
    position: static;
    float: left;
  }
`;

const LowerDisplayHeadingStyles = styled(DisplayHeading)`
  display: none;
  @media (min-width: 813px) {
    display: block;
  }
`;

const ThreeProductAlt = ({ products, frontmatter: profile }) => (
  <>
    <DisplayHeadingStyles>{profile.sectionTitle4}</DisplayHeadingStyles>
    <ThreeProductWrap>
      {products.map((product, i) => (
        <Col key={product.id}>
          <Product product={product} profile={profile} item={i} />
        </Col>
      ))}
      <LowerDisplayHeadingStyles>{profile.sectionTitle4}</LowerDisplayHeadingStyles>
    </ThreeProductWrap>
  </>
);

ThreeProductAlt.propTypes = {
  frontmatter: PropTypes.object,
  products: PropTypes.array,
};

export default ThreeProductAlt;
