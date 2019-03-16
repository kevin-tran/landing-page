/** @jsx jsx */

import React, { useState, useContext } from "react";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTransition, animated } from "react-spring";
import delay from "await-delay";

import Cursor from "components/cursor/cursor";
import Nav from "components/nav/nav";
import DelayRender from "components/delayRender/delayRender";

import { CursorContext } from "global/context/cursorContext";

const Container = styled(animated.main)({
  margin: "0 auto",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
});

const globalStyles = css`
  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  body,
  body a {
    margin: 0;
    cursor: none;
    overflow: hidden;
  }
`;

const Layout = ({ children, location }) => {
  const transitions = useTransition(children, children => children.key, {
    from: {
      opacity: 0,
      transform: "translate3d(0,40px,0)"
    },
    enter: () => async next => {
      await next({ opacity: 1, transform: "translate3d(0,0,0)" });
    },
    leave: () => async next => {
      await next({ opacity: 0, transform: "translate3d(0,40px,0)" });
      await delay(150);
    }
  });

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {transitions.map(({ item, props, key }) => {
        return (
          <DelayRender>
            <Container key={key} style={props}>
              {item}
            </Container>
          </DelayRender>
        );
      })}
      <Cursor />
      <Nav pathname={location && location.pathname} />
    </React.Fragment>
  );
};

export default Layout;
