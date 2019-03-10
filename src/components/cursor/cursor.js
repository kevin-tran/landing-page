/** @jsx jsx */

import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";

import { useMousePosition } from "../../hooks/useMousePosition/useMousePosition";

const CursorWrapper = styled("div")({
  position: "fixed",
  left: 0,
  top: 0,
  pointerEvents: "none",
  borderRadius: "50%",
  willChange: "transform"
});

const CursorOuter = styled("div")({
  width: 30,
  height: 30,
  zIndex: 12000
});

const CursorInner = styled("div")({
  width: 5,
  height: 5,
  left: -2.5,
  top: -2.5,
  zIndex: 11000,
  background: "#000",
  borderRadius: "50%"
});

const Circle = () => (
  <svg
    viewBox="0 0 50 50"
    width="50"
    height="50"
    css={{ transform: "translate(-22px, -27px)" }}
  >
    <circle fill="none" cx="25" cy="25" r="20" stroke="#000" strokeWidth="2" />
  </svg>
);

const Cursor = () => {
  const CursorRef = React.useRef();
  const position = useMousePosition();

  return (
    <CursorWrapper
      ref={CursorRef}
      style={{ transform: `matrix(1, 0, 0, 1, ${position.x}, ${position.y})` }}
    >
      <CursorOuter>
        <CursorInner />
        <Circle />
      </CursorOuter>
    </CursorWrapper>
  );
};

export default Cursor;
