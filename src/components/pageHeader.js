import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SelfridgesLogo from '../images/selfridges_logo.svg'

const Header = styled.header`
  height: 3.875rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  svg {
    display:block;
    max-width: 9.065rem;
  }
`

const Nav = styled.nav`
  margin-top: 0;
`

const NavLink = styled(Link)`
`;

const PageHeader = () => (
  <Header>
    <Nav>
      <NavLink to="/">
        <SelfridgesLogo />
      </NavLink>
    </Nav>
  </Header>
);

export default PageHeader;
