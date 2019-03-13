/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import LinkBase from "../link/link";
import PlusIcon from "../icons/plus/plus";
import Clock from "../clock/clock";

const NavContainer = styled("nav")({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
});

const Link = styled(LinkBase)({
  fontWeight: 400,
  lineHeight: 1.4
});

const Nav = () => {
  return (
    <NavContainer>
      <Link href="/about" css={{ position: "absolute", top: 30, right: 30 }}>
        about
      </Link>
      <Link href="/" css={{ position: "absolute", top: 30, left: 30 }}>
        kevin
      </Link>
      <PlusIcon css={{ position: "absolute", bottom: 30, right: 30 }} />
      <Clock css={{ position: "absolute", bottom: 30, left: 30 }} />
    </NavContainer>
  );
};

export default Nav;
