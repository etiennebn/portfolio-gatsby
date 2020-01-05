module.exports = {
  siteMetadata: {
    title: `Etienne Bourgoin`,
    description: `Personal website as a showcase of what I can do.`,
    author: `@etiennebn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`EventSource`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#2E364F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `400`, `400i`, `600`, `600i`, `700`],
          },
          {
            family: `Cormorant Garamond`,
            variants: [`200`, `400`, `600`, `700`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`200`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
