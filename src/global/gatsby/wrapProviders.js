import React from "react";

import { ThemeProvider } from "emotion-theming";

import Theme from "../context/themeContext";
import PageViewProvider from "../context/pageViewContext";
import CursorProvider from "../context/cursorContext";

export default ({ element }) => (
  <ThemeProvider theme={Theme}>
    <PageViewProvider>
      <CursorProvider>{element}</CursorProvider>
    </PageViewProvider>
  </ThemeProvider>
);
