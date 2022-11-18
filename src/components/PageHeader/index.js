import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import SelfridgesLogo from '../../images/selfridges_logo.svg';
import SiteWidthWrapper from '../SiteWidthWrapper';

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          background: ${theme.primaryAccent};
        `
      : css`
          background: ${theme.accent};
        `}

  height: 3.875rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  svg {
    display: block;
    max-width: 9.065rem;
  }
`;

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

const Nav = styled.nav`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  * {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            color: ${theme.text};
          `
        : css`
            color: ${theme.primary};
          `}
  }
`;

const HeaderLinkWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Contact = styled.a`
  text-transform: uppercase;
  margin-left: 2rem;
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          color: ${theme.text};
        `
      : css`
          color: ${theme.primary};
        `}
  &:focus, &:visited {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            color: ${theme.text};
          `
        : css`
            color: ${theme.primary};
          `}
  }
`;

const NavLink = styled.a`
  span {
    display: none;
  }
`;

const PageHeader = ({ contact }) => (
  <Header>
    <SiteWidthWrapper>
      <Nav>
        <NavLink
          data-testid="selfridges-logo-link"
          href="https://www.selfridges.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Selfridges &amp; Co"
        >
          <SiteLogo />
          <span>Selfridges &amp; Co</span>
        </NavLink>
        <HeaderLinkWrap>
          <Contact
            data-testid="contact-me-link"
            href={`mailto:${contact}?subject=Personal Shopping Appointment`}
            target="_blank"
          >
            Contact Me
          </Contact>
        </HeaderLinkWrap>
      </Nav>
    </SiteWidthWrapper>
  </Header>
);

PageHeader.propTypes = {
  contact: PropTypes.string,
};

export default PageHeader;
