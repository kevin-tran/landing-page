import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import Theme from "../../global/theme";
import PageViewProvider from "../../global/pageViewContext";

import Cursor from "../cursor/cursor";

const Container = styled("main")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  minHeight: "100vh",
  flexDirection: "column"
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
`;

const Layout = ({ children, ...rest }) => {
  return (
    <ThemeProvider theme={Theme}>
      <PageViewProvider>
        <Container>
          <Global styles={globalStyles} />
          {children}
          <Cursor />
        </Container>
      </PageViewProvider>
    </ThemeProvider>
  );
};

export default Layout;
