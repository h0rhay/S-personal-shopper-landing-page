import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  opacity: 0;
  transition: all ease-in;
  ${(props) =>
    props.visible &&
    css`
      /* @media (prefers-reduced-motion: no-preference) { */
      animation-name: ${fadeIn};
      animation-fill-mode: forwards;
      /* } */
    `};
  ${(props) =>
    props.slideInLeft &&
    css`
      /* @media (prefers-reduced-motion: no-preference) { */
      animation-name: ${fadeIn}, ${slideInFromLeft};
      animation-fill-mode: forwards;
      /* } */
    `}
  ${(props) =>
    props.slideInRight &&
    css`
      /* @media (prefers-reduced-motion: no-preference) { */
      animation-name: ${fadeIn}, ${slideInFromRight};
      animation-fill-mode: forwards;
      /* } */
    `}
`;

const FadeIn = ({ duration = 300, delay = 0, children, isVisible, slideInLeft, slideInRight, ...delegated }) => (
  <Wrapper
    visible={isVisible}
    slideInLeft={slideInLeft}
    slideInRight={slideInRight}
    {...delegated}
    style={{
      ...(delegated.style || {}),
      animationDuration: `${duration}ms`,
      animationDelay: `${delay}ms`,
    }}
  >
    {children}
  </Wrapper>
);

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  isVisible: PropTypes.bool,
  slideInLeft: PropTypes.bool,
  slideInRight: PropTypes.bool,
};

export default FadeIn;
