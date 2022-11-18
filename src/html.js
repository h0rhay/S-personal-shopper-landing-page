/* eslint-disable react/no-danger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Personal shopper services" />
        <meta
          name="keywords"
          content="personal shopper, style shopper, selfridges personal shopper, personal shopper london, stylist for women, mens personal shopper, personal shopping services, luxury personal shopper"
        />
        <meta name="author" content="George Clark - @h0rhay // Karthik Muthumari - @KarthiMuthumari" />
        <meta property="og:title" content="Selfridges Personal Shopper" />
        <meta name="og:description" content="Personal shopper services" />
        <meta property="og:url" content="https://stylist.selfridges.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://stylist.selfridges.com/selfridges-personal-shopper-social.jpg" />
        <meta name="twitter:creator" content="George Clark - @h0rhay // Karthik Muthumari - @KarthiMuthumari" />
        <meta name="twitter:title" content="Selfridges Personal Shopper" />
        <meta name="twitter:description" content="Personal shopper services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://stylist.selfridges.com/selfridges-personal-shopper-social-twitter.jpg"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
