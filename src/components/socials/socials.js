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
  <Link href="/">github</Link>,
  <Link href="/">linkedin</Link>,
  <Link href="/">email</Link>
];

const Socials = props => {
  const [isOpen, setIsOpen] = useState(false);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translateX(50px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(50px)" }
  });

  return (
    <Container {...props}>
      <PlusIcon onClick={() => setIsOpen(!isOpen)} />
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <LinkContainer style={props} key={key}>
              {SocialLinks.map(item => item)}
            </LinkContainer>
          )
      )}
    </Container>
  );
};

export default Socials;
