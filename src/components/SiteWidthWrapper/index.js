import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SiteWidthContainer = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  width: 70rem;
`;

const SiteWidthWrapper = ({ children, ...delegated }) => (
  <SiteWidthContainer className="site_width_wrap" {...delegated}>
    {children}
  </SiteWidthContainer>
);

SiteWidthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteWidthWrapper;
