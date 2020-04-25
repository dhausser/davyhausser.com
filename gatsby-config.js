/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Davy Hausser`,
    description: `A personal portfolio website.`,
    siteUrl: `https://davyhausser.com/`,
    home: {
      title: `Portfolio`,
      description: `Welcome to my personal piece of the Internet. I build websites and apps with React, Node and GraphQL. Hit me up!`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-emojis',
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
        omitGoogleFonts: false,
      },
    },
  ],
}
