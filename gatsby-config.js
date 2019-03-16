const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Kevin Tran`,
    description: `Kevin Tran`,
    author: `Kevin Tran`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cache",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout/layout")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Tran`,
        short_name: `kevin`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`
      }
    },
    {
      resolve: "gatsby-plugin-emoji-favicon",
      options: {
        emoji: "✌️"
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, "src/components"),
          global: path.resolve(__dirname, "src/global"),
          utils: path.resolve(__dirname, "src/utils")
        },
        extensions: ["js"]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
