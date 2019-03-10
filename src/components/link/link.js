import React from "react";
import { Link as LinkBase } from "gatsby";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const linkStyles = css({
  color: "black",
  fontWeight: 700
});

const ATag = styled("a")(linkStyles);
const GatsbyLink = styled(LinkBase)(linkStyles);

const Link = ({ children, href, external }) => {
  if (external) {
    return (
      <ATag href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </ATag>
    );
  }

  return (
    <GatsbyLink to={href} activeStyle={linkStyles}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
