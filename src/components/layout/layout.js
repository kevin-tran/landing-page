/** @jsx jsx */

import React, { useState } from "react";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTransition, animated } from "react-spring";

import Cursor from "components/cursor/cursor";
import Nav from "components/nav/nav";
import DelayRender from "components/delayRender/delayRender";
import delay from "await-delay";

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
      exiting: 0
    },
    enter: { opacity: 1, exiting: 0 },
    leave: item => async (next, cancel) => {
      await next({ exiting: 1 });
      await delay(150);
      await next({ opacity: 0 });
    }
  });

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {transitions.map(({ item, props: { opacity, exiting }, key }) => {
        return (
          <DelayRender>
            <Container key={key} style={{ opacity }}>
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
