const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `davyhausser.com`,
    author: {
      name: `Davy Hausser`,
      summary: `who lives and works in Warsaw building useful things.`,
    },
    description: `Davy Hausser's portfolio`,
    siteUrl: `https://davyhausser.com/`,
    twitter: `davyhausser`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: path.join(__dirname, `src`, `utils`, `fonts`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
