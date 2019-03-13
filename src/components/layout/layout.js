/** @jsx jsx */

import React from "react";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import Theme from "../../global/theme";
import PageViewProvider from "../../global/pageViewContext";
import CursorProvider from "../../global/cursorContext";

import Cursor from "../cursor/cursor";
import Nav from "../nav/nav";

const Container = styled("main")({
  margin: "0 auto",
  minHeight: "100vh"
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
  }
  .tl-edges {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Layout = ({ children, location: { pathname } }) => {
  return (
    <ThemeProvider theme={Theme}>
      <PageViewProvider>
        <Container>
          <Global styles={globalStyles} />
          <CursorProvider>
            {children}
            <Cursor />
            <Nav pathname={pathname && pathname} />
          </CursorProvider>
        </Container>
      </PageViewProvider>
    </ThemeProvider>
  );
};

export default Layout;
