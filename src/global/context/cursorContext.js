import React, { createContext, useState } from "react";

export const CursorContext = createContext({
  activeState: "normal",
  setActiveState: () => {}
});

const CursorProvider = ({ children }) => {
  const setActiveState = state => {
    setActive(prevState => {
      return {
        ...prevState,
        activeState: state
      };
    });
  };

  const cursorState = {
    activeState: "normal",
    setActiveState
  };

  const [activeState, setActive] = useState(cursorState);

  return (
    <CursorContext.Provider value={activeState}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
