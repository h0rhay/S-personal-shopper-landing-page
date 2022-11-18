module.exports = {
  siteMetadata: {
    title: 'Luxury Personal Shopping | Selfridges',
    description: 'Find out more about our Selfridges Personal Shoppers',
    author: 'George Clark - @h0rhay // Karthik Muthumari - @KarthiMuthumari',
    keywords: [
      'personal shopper',
      'style shopper',
      'selfridges personal shopper',
      'personal shopper london',
      'stylist for women',
      'mens personal shopper',
      'personal shopping services',
      'luxury personal shopper',
    ],
    siteUrl: 'https://stylist.selfridges.com',
    metaImage: './src/images/selfridges-personal-shopper-social.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-index',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'profiles',
        path: 'profiles',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Selfridges Personal Shopper',
        short_name: 'selfridges-personal-shopper',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#ffe256',
        display: 'standalone',
        icon: 'favicon/selfridges-favicon.svg',
        cache_busting_mode: `query`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-6QSYJHNMYD',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true, // https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies#anonymize
          allowAdFeatures: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        config: {
          instrumentationType: 'proAndSPA',
          accountId: '2785199',
          trustKey: '2785199',
          agentID: '1834836372',
          licenseKey: 'NRJS-bc33812222b69fd5cdd',
          applicationID: '1834836372',
          beacon: 'bam-cell.nr-data.net',
          errorBeacon: 'bam-cell.nr-data.net',
        },
      },
    },
  ],
};
