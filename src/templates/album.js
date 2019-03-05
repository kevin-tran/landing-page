import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

import Layout from "../components/layout/layout";

const Gutter = styled("section")({
  margin: "0 auto"
});

const NonStretchedImage = props => {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto"
      }
    };
  }

  return <Img {...normalizedProps} />;
};

const AlbumTemplate = ({ data }) => {
  const album = data.contentfulAlbum.images;

  return (
    <Layout>
      <Gutter>
        {album.map(image => {
          return <NonStretchedImage {...image} />;
        })}
      </Gutter>
    </Layout>
  );
};

export default AlbumTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulAlbum(id: { eq: $id }) {
      images {
        fluid(maxWidth: 1306, quality: 80) {
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
