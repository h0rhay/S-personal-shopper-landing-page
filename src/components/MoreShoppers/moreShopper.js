import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shopper from './shopper';

const Section = styled.section`
  margin: 4rem 0 2rem 2.1rem;
`;

const Profile = styled.div`
  @media (min-width: 813px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  width: 100%;
  min-height: 55vh;
  > a {
    text-decoration: none;
  }
`;

const MoreShopper = ({ shoppers }) => (
  <Section>
    <Profile>
      {shoppers.map((shopper, i) => (
        <Shopper key={shopper.id} shopper={shopper} index={i} />
      ))}
    </Profile>
  </Section>
);

MoreShopper.propTypes = {
  shoppers: PropTypes.array,
};

export default MoreShopper;
