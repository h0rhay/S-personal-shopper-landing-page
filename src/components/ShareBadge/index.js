import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ShareRoundGraphic from '../../images/share-roundel.svg';

const rotating = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ShareRoundel = styled.button`
  position: absolute;
  max-width: 8.75rem;
  max-height: 8.75rem;
  display: block;
  border: none;
  background: transparent;
  bottom: -8rem;
  left: 4rem;
  cursor: pointer;
  text-decoration: none;
  > div {
    position: relative;
    > div {
      font-family: 'DINNextLTPro-Light';
      letter-spacing: 1px;
      position: absolute;
      top: calc(50% - 0.75rem);
      left: calc(50% - 1.5rem);
      color: ${({ theme }) => theme.text};
      &:after {
        display: block;
        content: '';
        border-bottom: solid 1px ${({ theme }) => theme.text};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
      }
    }
  }
  &:hover {
    > div > div:after {
      transform: scaleX(1);
    }
  }
  @media (max-width: 860px) {
    bottom: -10rem;
    left: unset;
    right: 2rem;
    max-width: 7rem;
    max-height: 7rem;
  }
  path {
    fill: ${({ theme }) => theme.text};
  }
  svg {
    width: 6.5rem;
    animation: 40s ${rotating} linear infinite;
    transform-origin: center;
  }
`;

const ShareBadge = ({ clickHandler }) => (
  <ShareRoundel type="button" role="button" onClick={clickHandler}>
    <div>
      <ShareRoundGraphic />
      <div>SHARE</div>
    </div>
  </ShareRoundel>
);

ShareBadge.propTypes = {
  clickHandler: PropTypes.func,
};

export default ShareBadge;
