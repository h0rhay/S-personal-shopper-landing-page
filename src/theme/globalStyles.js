import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "DINNextLTPro-Light";
    src: url("../../fonts/DINNextLTPro-Light.woff") format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: "DINNextLTPro-Regular";
    src: url("../../fonts/DINNextLTPro-Regular.woff") format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: "DINNextLTPro-Medium";
    src: url("../../fonts/DINNextLTPro-Medium.woff") format('woff');
    font-display: swap;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size:16px;
  }

  div, p, button, a, span, input, label, li, section, article, header, footer, main, aside {
    font-size: 1rem;
  }

  html,
  body {
    background: ${({ theme }) => theme.primary};
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-family: DINNextLTPro-Light, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    width:100%;
    height:100%;
    letter-spacing: 0.5px;
    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }

  p, div, span  {
    font-family: DINNextLTPro-Light, Helvetica, Arial, sans-serif;
  }

  a, a:hover, a:focus, a:visited {
    color: ${({ theme }) => theme.text};
  }

  a, button {
    text-transform: uppercase;
    font-family: DINNextLTPro-Light, Helvetica, Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: DINNextLTPro-Medium, Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.text};
    line-height: 1;
    letter-spacing: 1px;
    font-weight: normal;
    text-transform: uppercase;
    + * {
      margin-top: 0.5rem;
    }
  }

  ${({ theme }) => css`
    h1 {
      ${theme.typography.desktop.headerOne};
      @media ${theme.breakpoints.small} {
        ${theme.typography.mobile.headerOne};
      }
    }
    h2 {
      ${theme.typography.desktop.headerTwo};
      @media ${theme.breakpoints.small} {
        ${theme.typography.mobile.headerTwo};
      }
    }
  `};

  .productHeading {
    ${({ theme }) => css`
      ${theme.typography.desktop.itemHeading};
    `};
  }

  .medium {
    font-family: DINNextLTPro-Medium, Helvetica, Arial, sans-serif;
  }


  strong {
    color: ${({ theme }) => theme.text};
  }

  li {
    margin-top: 0.25rem;
  }

  img, svg, .g-image {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Edge case tweaks: */

  .arron-dickinson {
    img.tpsa-pa-lower-img {
      object-fit:contain;
    }
  }

`;
