import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const increaseAnimation = (height) => keyframes`
  0% {
    height: 0rem;
  }
  100% {
    height: ${height};
  }
`;

const HeadingLineWrap = styled.h1`
  line-height: 1;
  position: relative;
  ${(props) =>
    props.space
      ? css`
          padding-top: ${props.space}rem;
        `
      : null}
  ${(props) =>
    props.line
      ? css`
          &:before {
            position: absolute;
            content: '';
            top: ${props.position
              ? `
              ${props.position}rem
            `
              : `-20rem`};
            left: 1rem;
            height: ${props.lineHeight ? `${props.lineHeight}rem` : `16rem`};
            animation: ${props.lineHeight ? increaseAnimation(`${props.lineHeight}rem`) : increaseAnimation(`16rem`)} 3s;
            animation-iteration-count: 1;
            width: 1px;
            ${({ theme }) =>
              theme.themeType === 'dark'
                ? css`
                    background-color: ${theme.accent};
                  `
                : css`
                    background-color: ${theme.primaryAccent};
                  `}
            @media (max-width: 860px) {
              height: 8rem;
              top: -10rem;
            }

            @media (max-width: 860px) {
              display: none;
            }
          }
        `
      : null}
  @media(max-width:860px) {
    margin-top: 12rem;
  }
`;

const HeadingWithLine = ({ text, ...props }) => <HeadingLineWrap {...props}>{text}</HeadingLineWrap>;

HeadingWithLine.propTypes = {
  text: PropTypes.string,
};

export default HeadingWithLine;
