import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import get from "lodash.get";

import SEO from "../components/seo/seo";

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

  return <Img {...normalizedProps} alt={props.title} />;
};

const AlbumTemplate = ({ data }) => {
  const album = get(data, "contentfulAlbum.images");
  const title = get(data, "contentfulAlbum.title");

  return (
    <React.Fragment>
      <SEO title={title} />
      <Gutter>
        {album.map(image => {
          return <NonStretchedImage {...image} key={image.title} />;
        })}
      </Gutter>
    </React.Fragment>
  );
};

export default AlbumTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulAlbum(id: { eq: $id }) {
      title
      images {
        title
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
