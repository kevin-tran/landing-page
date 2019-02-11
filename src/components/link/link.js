import React from "react";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ children, href, external }) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <GatsbyLink to={href}>{children}</GatsbyLink>;
};

export default Link;
