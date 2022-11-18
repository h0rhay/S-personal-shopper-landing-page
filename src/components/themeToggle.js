import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ThemeModeContext } from './themeModeProvider';

const Toggle = styled.label`
  opacity: 0.8;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            background-color: ${theme.primaryAccent};
          `
        : css`
            background-color: ${theme.primary};
          `}

    -webkit-transition: 0.4s;
    transition: 0.4s;
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            border: 1px solid ${theme.text};
          `
        : css`
            border: 1px solid ${theme.primary};
          `}
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 14px;
    left: 1px;
    bottom: 1px;
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            background-color: ${theme.text};
          `
        : css`
            background-color: ${theme.primary};
          `}
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            background-color: ${theme.primaryAccent};
          `
        : css`
            background-color: ${theme.accent};
          `}
  }

  input:focus + .slider {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            box-shadow: 0 0 1px ${theme.primaryAccent};
          `
        : css`
            box-shadow: 0 0 1px ${theme.accent};
          `}
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }

  &:after {
    content: 'Theme';
    position: absolute;
    top: -0.75rem;
    left: 0;
    font-size: 10px;
    text-transform: uppercase;
  }
`;

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeModeContext);
  return (
    <Toggle className="switch" id="theme-toggle">
      <input type="checkbox" />
      <span
        role="checkbox"
        className="slider"
        onClick={toggleTheme}
        onKeyPress={toggleTheme}
        tabIndex={0}
        aria-checked="false"
        aria-labelledby="theme-toggle"
      />
    </Toggle>
  );
};

export default ThemeToggle;
