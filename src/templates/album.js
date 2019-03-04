import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const Gutter = styled("section")({
  maxWidth: 1000,
  margin: "0 auto"
});

const AlbumTemplate = ({ data }) => {
  const album = data.contentfulAlbum.images;
  return (
    <Gutter>
      {album.map(image => {
        return <Img key={image.fluid.src} fluid={image.fluid} />;
      })}
    </Gutter>
  );
};

export default AlbumTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulAlbum(id: { eq: $id }) {
      images {
        fluid {
          base64
          aspectRatio
          src
          sizes
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;
