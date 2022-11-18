import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const isAnchorOrLink = (href, to, onClick, target, rel) => {
  if (href) {
    return {
      href,
      target,
      rel,
    };
  }
  if (onClick) {
    return {
      onClick,
    };
  }
  return {
    to,
  };
};

const ButtonStyles = styled.div`
  a,
  button {
    display: inline-block;
    border: none;
    outline: 1px solid ${({ theme }) => theme.accent};
    padding: 1rem 5.5vmin;
    margin: 0;
    text-decoration: none;
    text-transform: none;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    white-space: nowrap;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.accent};
      outline: 1px solid ${({ theme }) => theme.primary};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.text};
      outline-offset: -4px;
    }

    &:active {
      transform: scale(0.99);
    }
  }
`;

const Button = ({ to, href, onClick, children, target, rel, type, shopperId }) => {
  const ActionComponent = to ? Link : href ? 'a' : 'button';
  const url = href ? new URL(href) : null;
  if (shopperId) {
    url.searchParams.append('utm_source', 'clientelling');
    url.searchParams.append('utm_medium', 'referral');
    url.searchParams.append('utm_campaign', `${shopperId}_clientellingmicrosite_na_na_na_na`);
    url.searchParams.append('utm_term', 'na');
    url.searchParams.append('utm_content', 'na');
    url.searchParams.append('POR', 'Y');
  }
  const actions = isAnchorOrLink(url, to, onClick, target, rel);
  const componentType = ActionComponent === 'button' ? type || 'button' : undefined;
  return (
    <ButtonStyles>
      <ActionComponent {...actions} onClick={onClick} type={componentType}>
        {children}
      </ActionComponent>
    </ButtonStyles>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  shopperId: PropTypes.number,
  target: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
