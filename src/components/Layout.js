import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetaData';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
