module.exports = {
  siteMetadata: {
    title: 'tedgeving.com',
    description: 'tegeving.com | web developer | albuquerque NM',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    }, {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'tedgeving.com/data',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://tedgeving.com/data',
          replacementUrl: 'http://tedgeving.com'
        },
        concurrentRequests: 10,

        includedRoutes: [
          '/*/*/posts', '/*/*/pages'
        ],
        normalizer: function ({entities}) {
          return entities
        }
      }
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1652283-2',
        anonymize: true
      }
    }, {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['source sans pro\:200,300,400,600,700,900']
      }
    }
  ]
}
