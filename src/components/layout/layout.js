/** @jsx jsx */

import React from "react";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { useTransition, animated } from "react-spring";

import Theme from "../../global/theme";
import PageViewProvider from "../../global/pageViewContext";
import CursorProvider from "../../global/cursorContext";

import Cursor from "../cursor/cursor";
import Nav from "../nav/nav";

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
  const transitions = useTransition(location && location.pathname, null, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)"
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)"
    }
  });

  return (
    <ThemeProvider theme={Theme}>
      <PageViewProvider>
        <CursorProvider>
          {transitions.map(({ item, props, key }) => {
            return (
              <Container key={key} style={props}>
                <Global styles={globalStyles} />
                {children}
              </Container>
            );
          })}
          <Cursor />
          <Nav pathname={location.pathname} />
        </CursorProvider>
      </PageViewProvider>
    </ThemeProvider>
  );
};

export default Layout;
