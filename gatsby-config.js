module.exports = {
  siteMetadata: {
    title: 'Mehmet Celik { software engineer / backend developer }',
    description: 'Portfolio of Mehmet Celik, software engineer and backend developer.',
    author: '@meceware',
    siteUrl: 'https://www.meceware.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${ __dirname }/docs`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 60,
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'docs/assets',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 768,
              quality: 90,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'meceware.com',
        short_name: 'meceware',
        start_url: '/',
        background_color: '#e7eef4',
        theme_color: '#ea7e10',
        display: 'minimal-ui',
        icon: 'src/images/mcw_fav.png',
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87141768-1',
        head: false,
        respectDNT: true,
        // other options
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.meceware.com/',
      },
    },
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        exclude: [
          '/dev-404-page',
          '/404',
          '/404.html',
          '/offline-plugin-app-shell-fallback',
        ],
        additionalSitemaps: [
          {
            name: 'wp-plugins',
            url: '/sitemap_wp.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [
          'Element.prototype.closest',
          'Element.prototype.append',
          'Element.prototype.after',
          'Array.prototype.forEach',
          'NodeList.prototype.forEach',
        ],
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-meta-redirect', // make sure this is always the last one
  ],
};
