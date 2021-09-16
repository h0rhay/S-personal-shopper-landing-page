export const globalStyles = `
  * {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --primary-color: #ffe256;
  }

  /* More info: https://bit.ly/2PsCnzk */
  * + * {
    margin-top: 1rem;
  }

  html {
    font-size:16px;
  }

  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
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
`