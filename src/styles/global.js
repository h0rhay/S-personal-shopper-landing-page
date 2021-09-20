export const globalStyles = `
  @font-face {
    font-family: "DINNextLTPro-Regular";
    src: url("../fonts/DINNextLTPro-Regular.woff");
    font-display: swap;
  }
  @font-face {
    font-family: "DINNextLTPro-Medium";
    src: url("../fonts/DINNextLTPro-Medium.woff");
    font-display: swap;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --primary-color: #ffe256;
    --text-color: #212121;
    --accent-color: #e7e7e7;
  }

  /* More info: https://bit.ly/2PsCnzk */
  // * + * {
  //   margin-top: 1rem;
  // }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size:16px;
  }

  html,
  body {
    margin: 0;
    color: var(--text-color);
    font-family: DINNextLTPro-Regular, Helvetica, Arial, sans-serif;
    line-height: 1.4;

    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: DINNextLTPro-Medium, Helvetica, Arial, sans-serif;
    color: #222;
    line-height: 1.1;

    + * {
      margin-top: 0.5rem;
    }
  }

  strong {
    color: #222;
  }

  li {
    margin-top: 0.25rem;
  }

  img, svg, .g-image {
    height: 100%;
    width: 100%;
  }
`;
