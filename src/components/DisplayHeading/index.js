import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const DisplayHeadingStyles = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 25vmin;
  @media (max-width: 812px) {
    top: 90vmin;
  }
  @media (min-width: 767px) and (max-width: 812px) {
    top: 92vmin;
  }
  word-wrap: break-word;
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          text-shadow: 0px 2px 7px ${theme.shadow};
        `
      : css`
          text-shadow: -1px 1px 0 ${theme.shadow}, 1px 1px 0 ${theme.shadow}, 1px -1px 0 ${theme.shadow},
            -1px -1px 0 ${theme.shadow};
        `}
  letter-spacing: 20px;
  @media (max-width: 812px) {
    letter-spacing: 10px;
  }
  font-size: 6vmax;
  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      ${theme.typography.mobile.displayHeading};
    } ;
  `};
`;

const DisplayHeading = ({ children, ...delegated }) => (
  <DisplayHeadingStyles {...delegated}>{children}</DisplayHeadingStyles>
);

DisplayHeading.propTypes = {
  children: PropTypes.string,
};

export default DisplayHeading;
