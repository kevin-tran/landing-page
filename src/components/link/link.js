import React, { useContext } from "react";
import { Link as LinkBase } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { CursorContext } from "global/context/cursorContext";

const linkStyles = css({
  color: "black",
  fontWeight: 400,
  textDecoration: "none",
  position: "relative",
  ["&:before"]: {
    content: "''",
    zIndex: -1,
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
    height: 1,
    background: "black",
    transform: "scale3d(0,1,1)",
    transformOrigin: "0% 50%",
    transition: "transform 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
  },
  ["&:hover"]: {
    ["&:before"]: {
      transform: "scale3d(1,1,1)"
    }
  }
});

const ATag = styled("a")(linkStyles);
const GatsbyLink = styled(LinkBase)(linkStyles);

const Link = ({ children, href, external, exit, ...rest }) => {
  const { setActiveState } = useContext(CursorContext);

  if (external) {
    return (
      <ATag
        href={href}
        target={href.match("mailto") ? null : "_blank"}
        rel="noopener noreferrer"
        onMouseEnter={() => setActiveState("linkHover")}
        onMouseLeave={() => setActiveState("normal")}
        onClick={() => setActiveState("normal")}
        {...rest}
      >
        {children}
      </ATag>
    );
  }

  return (
    <GatsbyLink
      to={href}
      activeStyle={linkStyles}
      onMouseEnter={() => setActiveState("linkHover")}
      onMouseLeave={() => setActiveState("normal")}
      onClick={() => setActiveState("normal")}
      {...rest}
    >
      {children}
    </GatsbyLink>
  );
};

export default Link;
