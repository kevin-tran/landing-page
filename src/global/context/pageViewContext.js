import React, { createContext, useState } from "react";

export const PageViewContext = createContext({
  homeHasLoaded: false,
  setHasLoaded: () => {}
});

const PageViewProvider = ({ children }) => {
  const setHasLoaded = () => {
    toggleLoaded(prevState => {
      return {
        ...prevState,
        homeHasLoaded: true
      };
    });
  };

  const loadingState = {
    homeHasLoaded: false,
    setHasLoaded
  };

  const [loaded, toggleLoaded] = useState(loadingState);

  return (
    <PageViewContext.Provider value={loaded}>
      {children}
    </PageViewContext.Provider>
  );
};

export default PageViewProvider;
