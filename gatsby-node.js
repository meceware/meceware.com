const path = require( 'path' );

const redirects = [
  // deprecated link
  {
    fromPath: '/fp',
    toPath: '/fullpage-for-wpbakery-page-builder/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/efu',
    toPath: '/elements-for-users/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/plugins',
    toPath: '/docs/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/plugins/docs',
    toPath: '/docs/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/plugins/docs/fullpage-for-gutenberg/',
    toPath: '/docs/fullpage-for-gutenberg/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/plugins/docs/fullpage-for-elementor/',
    toPath: '/docs/fullpage-for-elementor/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/plugins/docs/custom-js-css-gutenberg/',
    toPath: '/docs/custom-js-css-gutenberg/',
    isPermanent: true,
  },
  // deprecated link
  {
    fromPath: '/plugins/docs/block-permissions-for-gutenberg/',
    toPath: '/docs/block-permissions-for-gutenberg/',
    isPermanent: true,
  },
];

exports.onCreateWebpackConfig = ( { actions, plugins } ) => {
  actions.setWebpackConfig( {
    plugins: [
      plugins.define( {
        'global.GENTLY': false,
      } ),
    ],
  } );
};

// Create docs pages
exports.createPages = async( { actions, graphql } ) => {
  const { createPage, createRedirect } = actions;

  return new Promise( ( resolve, reject ) => {
    resolve(
      graphql(
        `{
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  id
                }
              }
            }
          }
        }`,
      ).then( result => {
        // Handle errors
        if ( result.errors ) {
          // eslint-disable-next-line no-console
          console.log( result.errors );
          // reporter.panicOnBuild( 'Error while running GraphQL query.' );
          reject( result.errors );
        }

        result.data.allMarkdownRemark.edges.forEach( ( { node } ) => {
          createPage( {
            path: `/docs/${ node.frontmatter.id }/`,
            component: path.resolve( './src/templates/docs.js' ),
            context: {
              id: node.frontmatter.id,
            }, // additional data can be passed via context
          } );
        } );

        redirects.forEach( redirect => createRedirect( redirect ) );
      } ),
    );
  } );
};
