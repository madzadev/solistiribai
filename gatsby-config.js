/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // siteMetadata: {
  //   siteUrl: `https://www.solistiribai.netlify.appa`,
  // },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
  ],
  proxy: {
    prefix: "/contact",
    url: "https://solistiribai.herokuapp.com",
  },
}
