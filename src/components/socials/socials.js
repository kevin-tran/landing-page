/** @jsx jsx */

import React, { useState } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTransition, animated } from "react-spring";

import LinkBase from "components/link/link";
import PlusIcon from "components/icons/plus/plus";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  flexFlow: "row-reverse"
});

const LinkContainer = styled(animated.div)({});

const Link = styled(LinkBase)({
  marginRight: 20
});

const SocialLinks = [
  {
    site: "email",
    link: "mailto:hello@kevin.today?subject=Hey! Came from your website"
  },
  {
    site: "linkedin",
    link: "https://www.linkedin.com/in/kevin-tran-35a135108"
  },
  {
    site: "github",
    link: "https://github.com/kevin-tran"
  }
];

const Socials = props => {
  const [isOpen, setIsOpen] = useState(false);

  const transitions = useTransition(SocialLinks, item => item.site, {
    from: {
      transform: "translate3d(40px,0,0)",
      opacity: 0,
      pointerEvents: "none"
    },
    update: {
      transform: isOpen ? "translate3d(0,0,0)" : "translate3d(40px,0,0)",
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none"
    },
    trail: 150
  });

  return (
    <Container {...props}>
      <PlusIcon onClick={() => setIsOpen(!isOpen)} css={{ fill: "black" }} />

      {transitions.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          <Link href={item.link} external>
            {item.site}
          </Link>
        </animated.div>
      ))}
    </Container>
  );
};

export default Socials;
