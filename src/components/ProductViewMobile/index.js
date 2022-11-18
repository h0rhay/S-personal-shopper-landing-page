import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';

const Heading = styled.h2`
  letter-spacing: 5px;
  margin: 1rem 0.5rem;
`;
const ProductViewMobile = ({ frontmatter }) => {
  const { products, ...profile } = frontmatter;
  return (
    <div>
      {products.map((product, i) => (
        <Fragment key={`mobile-product-view-${i}`}>
          {i === 0 && <Heading>{profile.sectionTitle1}</Heading>}
          {i === 1 && <Heading>{profile.sectionTitle2}</Heading>}
          {i === 4 && <Heading>{profile.sectionTitle3}</Heading>}
          {i === 6 && <Heading>{profile.sectionTitle4}</Heading>}
          {i === 9 && <Heading>{profile.sectionTitle5}</Heading>}
          <Product index={i} product={product} profile={profile} />
        </Fragment>
      ))}
    </div>
  );
};

ProductViewMobile.propTypes = {
  frontmatter: PropTypes.shape({
    products: PropTypes.array,
  }),
};

export default ProductViewMobile;
