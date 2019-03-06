import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        {children}
        <></>
      </>
    )}
  />
);

export default Layout;
