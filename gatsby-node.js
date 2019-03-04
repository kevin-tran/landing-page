const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const albumTemplate = path.resolve("src/templates/album.js");

  return graphql(`
    {
      allContentfulAlbum(limit: 1000) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allContentfulAlbum.edges.forEach(edge => {
      createPage({
        path: `/album/${edge.node.slug}/`,
        component: albumTemplate,
        context: {
          id: edge.node.id
        }
      });
    });

    return;
  });
};
