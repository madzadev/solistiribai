/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// const {
//   NODE_ENV,
//   URL: NETLIFY_SITE_URL = "https://www.solistiribai.netlify.app",
//   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
//   CONTEXT: NETLIFY_ENV = NODE_ENV,
// } = process.env
// const isNetlifyProduction = NETLIFY_ENV === "production"
// const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://www.solistiribai.netlify.app`,
    title: `Pandas Eating Lots`,
    description: `A simple description about pandas eating lots...`,
    author: `gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/navbar/logo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     resolveEnv: () => NETLIFY_ENV,
    //     env: {
    //       production: {
    //         policy: [{ userAgent: "*" }],
    //       },
    //       "branch-deploy": {
    //         policy: [{ userAgent: "*", disallow: ["/"] }],
    //         sitemap: null,
    //         host: null,
    //       },
    //       "deploy-preview": {
    //         policy: [{ userAgent: "*", disallow: ["/"] }],
    //         sitemap: null,
    //         host: null,
    //       },
    //     },
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images` },
    },
  ],
  proxy: {
    prefix: "/contact",
    url: "https://solistiribai.herokuapp.com",
  },
}
