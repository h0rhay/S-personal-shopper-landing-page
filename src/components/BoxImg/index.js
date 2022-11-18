import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const BoxImgStyle = styled.div`
  position: relative;
  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    ${(props) =>
      !props.dir || props.dir === 'right'
        ? css`
            top: -1rem;
            right: -1rem;
          `
        : css`
            bottom: -1rem;
            left: -1rem;
          `}
    ${(props) =>
      props.dir &&
      props.dir === 'shopper' &&
      css`
        top: -2rem;
        left: -2rem;
      `}
    outline: 1px solid ${({ theme }) => theme.accent};
  }
`;

const BoxImg = ({ children, dir, ...delegated }) => (
  <BoxImgStyle {...delegated} dir={dir}>
    {children}
  </BoxImgStyle>
);

BoxImg.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  dir: PropTypes.string,
};

export default BoxImg;
