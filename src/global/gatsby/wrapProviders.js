import React from "react";

import { ThemeProvider } from "emotion-theming";

import Theme from "../context/themeContext";
import PageViewProvider from "../context/pageViewContext";
import CursorProvider from "../context/cursorContext";
import TimeProvider from "../context/timeContext";

export default ({ element }) => (
  <ThemeProvider theme={Theme}>
    <TimeProvider>
      <PageViewProvider>
        <CursorProvider>{element}</CursorProvider>
      </PageViewProvider>
    </TimeProvider>
  </ThemeProvider>
);
