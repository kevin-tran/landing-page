/** @jsx jsx */

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";
import { useTrail, animated } from "react-spring";

const CursorWrapper = styled(animated.div)({
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

const CursorInner = styled(animated.div)({
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
    css={{ transform: "translate(-22px, -23px)" }}
  >
    <circle fill="none" cx="25" cy="25" r="20" stroke="#000" strokeWidth="2" />
  </svg>
);

const fast = { mass: 1, tension: 1500, friction: 50 };
const trans = (x, y) => `matrix(1, 0, 0, 1, ${x}, ${y})`;

const Cursor = () => {
  const [xy, setXy] = useState([0, 0]);
  const [trail, set] = useTrail(1, () => ({
    xy: [0, 0],
    config: fast
  }));

  useEffect(() => {
    const setFromEvent = e => {
      set({ xy: [e.clientX, e.clientY] });
      setXy([e.clientX, e.clientY]);
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <React.Fragment>
      <CursorWrapper style={{ transform: trans(xy[0], xy[1]) }}>
        <CursorInner />
      </CursorWrapper>
      {trail.map(({ xy }, index) => {
        return (
          <React.Fragment key={index}>
            <CursorWrapper style={{ transform: xy.interpolate(trans) }}>
              <CursorOuter>
                <Circle />
              </CursorOuter>
            </CursorWrapper>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Cursor;
