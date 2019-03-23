/** @jsx jsx */

import React, { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import { useTrail, useSpring, animated } from "react-spring";
import { CursorContext } from "global/context/cursorContext";

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
  background: "black",
  borderRadius: "50%"
});

const CursorWrapper = styled(animated.div)({
  position: "fixed",
  left: 0,
  top: 0,
  pointerEvents: "none",
  borderRadius: "50%",
  willChange: "transform"
});

const LinkHover = css({
  [CursorInner]: {
    display: "none"
  }
});

const CircleBase = css({
  fill: "none",
  cx: 25,
  cy: 25,
  r: 20,
  stroke: "black",
  strokeWidth: 1,
  strokeDasharray: 1000,
  transition: "all .4s ease-in-out"
});

const CircleHover = css({
  transform: "translate(-22px, -23px) scale(1.5)"
});

const Circle = ({ activeState }) => {
  const props = useSpring({ offset: 0, from: { offset: 1000 } });

  return (
    <animated.svg
      viewBox="0 0 50 50"
      width="50"
      height="50"
      css={[
        {
          transform: "translate(-22px, -23px)",
          transition: "transform .3s ease"
        },
        activeState === "linkHover" && CircleHover
      ]}
    >
      <animated.circle strokeDashoffset={props.offset} css={[CircleBase]} />
    </animated.svg>
  );
};

const fast = { mass: 1, tension: 3000, friction: 80, clamp: true };
const main = { mass: 0, tension: 0, friction: 0, clamp: true };
const trans = (x, y) => `matrix(1, 0, 0, 1, ${x}, ${y})`;

const Cursor = () => {
  const { activeState } = useContext(CursorContext);
  const [trail, set] = useTrail(2, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? main : fast)
  }));

  useEffect(() => {
    const setFromEvent = e => set({ xy: [e.clientX, e.clientY] });

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <React.Fragment>
      {trail.map(({ xy }, index) => {
        return (
          <React.Fragment key={index}>
            <CursorWrapper
              style={{ transform: xy.interpolate(trans) }}
              css={activeState === "linkHover" && LinkHover}
            >
              {index === 0 && <CursorInner />}
              {index === 1 && (
                <CursorOuter>
                  <Circle activeState={activeState} />
                </CursorOuter>
              )}
            </CursorWrapper>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Cursor;
