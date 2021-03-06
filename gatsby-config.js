module.exports = {
  siteMetadata: {
    title: `Etienne Bourgoin`,
    description: `Hello I am Etienne Bourgoin. This is a personal website built with Gatsby on top of React. It is a showcase of what I can do.`,
    author: `@etiennebn`,
    siteUrl: "https://www.ebourgoin.com",
    keywords: "portfolio, developer, lead developer, front-end, back-end, fullstack",
    social: {
      github: "etiennebn",
      linkedin: "etienne-bourgoin",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`EventSource`],
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ebourgoin.com",
        sitemap: "https://www.ebourgoin.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
