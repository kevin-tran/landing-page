/** @jsx jsx */

import React from "react";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTransition, animated } from "react-spring";
import delay from "await-delay";

import Cursor from "components/cursor/cursor";
import Nav from "components/nav/nav";
import DelayRender from "components/delayRender/delayRender";

const Container = styled(animated.main)({
  margin: "0 auto",
  minHeight: "calc(100vh - 50px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
});

const GradientBg = styled("div")({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: "linear-gradient(to bottom, #F9F0BD 0%, #F8DCB9 100%)"
});

const globalStyles = css`
  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  body {
    overflow-x: hidden;
    background: "linear-gradient(to bottom, #F9F0BD 0%, #F8DCB9 100%)";
  }
  body,
  body a {
    cursor: none;
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
      <GradientBg />
      <Global styles={globalStyles} />
      {transitions.map(({ item, props, key }) => {
        return (
          <DelayRender>
            <Container key={key} style={props}>
              <div css={{ padding: "10em 0" }}>{item}</div>
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
