/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import LinkBase from "components/link/link";
import Socials from "components/socials/socials";
import Clock from "components/clock/clock";

const Link = styled(LinkBase)({
  fontWeight: 400,
  lineHeight: 1.4
});

const Nav = ({ pathname }) => {
  return (
    <React.Fragment>
      {pathname !== "/about" ? (
        <Link
          href="/about"
          css={{ position: "absolute", top: 30, right: 30 }}
          exit={{
            length: 0.3
          }}
          entry={{
            delay: 0.6
          }}
        >
          about
        </Link>
      ) : (
        <span css={{ position: "absolute", top: 30, right: 30 }}>about</span>
      )}
      {pathname !== "/" ? (
        <Link
          href="/"
          css={{ position: "absolute", top: 30, left: 30 }}
          exit={{
            length: 0.3
          }}
          entry={{
            delay: 0.6
          }}
        >
          kevin
        </Link>
      ) : (
        <span css={{ position: "absolute", top: 30, left: 30 }}>kevin</span>
      )}
      <Socials css={{ position: "absolute", bottom: 30, right: 30 }} />
      <Clock css={{ position: "absolute", bottom: 30, left: 30 }} />
    </React.Fragment>
  );
};

export default Nav;
