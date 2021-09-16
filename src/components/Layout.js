import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { globalStyles } from '../styles/global'
import PageHeader from './pageHeader';
import useSiteMetadata from '../hooks/use-sitemetadata';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`

const Main = styled.main`
  
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <PageHeader />
      <Main>
        {children}
      </Main>
    </>
  );
};

export default Layout;
