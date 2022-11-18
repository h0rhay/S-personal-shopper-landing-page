import React from 'react';
import styled, { css } from 'styled-components';
import SelfridgesLogo from '../images/selfridges_logo.svg';

const Wrapper = styled.div`
  padding: 5rem;
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const NavLink = styled.a``;

const SiteLogo = styled(SelfridgesLogo)`
  path {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            fill: ${theme.text};
          `
        : css`
            fill: ${theme.primary};
          `}
  }
`;

const Title = styled.h1`
  color: #ffffff54;
  font-size: 8rem;
`;

const Description = styled.p`
  color: #ffffff54;
  font-size: 3rem;
  font-family: 'DINNextLTPro-Medium';
`;

const IndexPage = () => (
  <Wrapper>
    <NavLink href="https://www.selfridges.com/" target="_blank" rel="noopener noreferrer">
      <SiteLogo />
    </NavLink>
    <Title>404</Title>
    <Description>Sorry, the page you requested does not exist.</Description>
  </Wrapper>
);
export default IndexPage;
