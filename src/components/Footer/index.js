import React from 'react';
import styled, { css } from 'styled-components';
import SelfridgesLogo from '../../images/selfridges_logo.svg';
import SiteWidthWrapper from '../SiteWidthWrapper';

const PageFooter = styled.footer`
  height: 5.625rem;
  padding: 2rem 0;
`;

const SiteLogo = styled(SelfridgesLogo)`
  width: 8rem;
  flex-grow: 1;
  path {
    fill: ${({ theme }) => theme.text};
  }
  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      margin: 2rem 0;
    }
  `}
`;

const Container = styled.div`
  display: flex;

  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      flex-direction: column;
    }
  `}
`;

const NavBar = styled.ul`
  flex-grow: 9;
  justify-content: end;
  display: flex;

  li {
    display: inline;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      flex-direction: column;
      li:last-of-type {
        margin-bottom: 2rem;
      }
    }
    @media ${theme.breakpoints.medium} {
      li + li {
        &::before {
          content: '•';
          margin: 0 0.5rem;
        }
      }
    }
  `};
`;

const FooterLinks = styled.a`
  font-family: 'DINNextLTPro-Light';
  font-size: 14px;
  margin: 0 5px;

  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      margin-bottom: 0.5rem;
    }
  `};
`;

const NavLink = styled.a`
  span {
    display: none;
  }
`;

const Footer = () => (
  <PageFooter>
    <SiteWidthWrapper>
      <Container>
        <NavLink
          data-testid="selfridges-footer-logo"
          href="https://www.selfridges.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Selfridges &amp; Co"
        >
          <SiteLogo />
          <span>Selfridges &amp; Co</span>
        </NavLink>
        <NavBar>
          <li>
            <FooterLinks href="https://www.selfridges.com/GB/en/features/info/accessibility">ACCESSIBILITY</FooterLinks>
          </li>
          <li>
            <FooterLinks href="https://www.selfridges.com/GB/en/features/info/our-corporate-policies/privacy-cookie-policy">
              PRIVACY & COOKIES POLICIES
            </FooterLinks>
          </li>
          <li>
            <FooterLinks href="https://www.selfridges.com/GB/en/features/info/terms-conditions">
              TERMS & CONDITIONS
            </FooterLinks>
          </li>
        </NavBar>
      </Container>
    </SiteWidthWrapper>
  </PageFooter>
);

export default Footer;
