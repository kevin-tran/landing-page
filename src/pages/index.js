/** @jsx jsx */

import React, { useRef, useContext, useEffect } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useSpring, useChain, useTransition, animated } from "react-spring";
import { PageViewContext } from "../global/pageViewContext";

import SEO from "../components/seo/seo";
import Link from "../components/link/link";

const Root = styled("section")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});

const Heading = styled(animated.h1)({
  fontSize: 52,
  lineHeight: 1.4,
  marginBottom: "1rem",
  marginTop: 0,
  position: "absolute"
});

const Body = styled(animated.h3)(({ theme }) => ({
  fontSize: 32,
  lineHeight: 1.4,
  fontWeight: theme.font.reg,
  margin: 0
}));

const WaveHeading = props => (
  <Heading {...props}>
    Hi!{" "}
    <span role="img" aria-label="wave emoji">
      👋
    </span>
  </Heading>
);

const Content = styled(animated.span)({
  display: "block",
  margin: 0,
  lineHeight: 1.4
});

const Row = styled(animated.div)({
  height: 44,
  overflow: "hidden",
  display: "flex",
  alignItems: "flex-end"
});

const BodyContent = [
  {
    paragraph: (
      <Content>
        Lorem ipsum dolor sit amet, <Link href="/about">consectetur</Link>{" "}
        adipiscing
      </Content>
    ),
    key: "paragraph-1"
  },
  {
    paragraph: <span>elit. Praesent placerat accumsan enim, vitae</span>,
    key: "paragraph-2"
  },
  {
    paragraph: (
      <Content>
        tincidunt eros <Link>test</Link> eu. Nunc facilisis ipsum
      </Content>
    ),
    key: "paragraph-3"
  },
  {
    paragraph: (
      <Content>
        finibus velit accumsan, eget porta <Link>eros</Link> mollis
      </Content>
    ),
    key: "paragraph-4"
  }
];

const IndexPage = props => {
  const { homeHasLoaded, setHasLoaded } = useContext(PageViewContext);

  useEffect(() => {
    return () => {
      if (!homeHasLoaded) {
        setHasLoaded();
      }
    };
  });

  const landingRef = useRef();
  const landingProps = useSpring({
    to: async next => {
      await next({ opacity: 1, transform: "translateY(0)" });
      await next({ opacity: 0, transform: "translateY(50px)" });
    },
    from: {
      opacity: 0,
      transform: "translateY(50px)"
    },
    ref: landingRef
  });

  const bodyRef = useRef();
  const bodyProps = useSpring({
    to: { opacity: 1 },
    from: {
      opacity: 1
    },
    ref: bodyRef
  });

  const transitionRef = useRef();
  const transitions = useTransition(BodyContent, item => item.key, {
    from: { height: 0 },
    enter: { height: 44 },
    leave: { height: 0 },
    ref: transitionRef
  });

  useChain(
    homeHasLoaded
      ? [bodyRef, transitionRef]
      : [landingRef, bodyRef, transitionRef]
  );

  return (
    <>
      <SEO title="Home" keywords={["gatsby", "react", "portfolio"]} />
      <Root>
        <WaveHeading style={landingProps} />
        <Body css={{ maxWidth: 1200 }} style={bodyProps}>
          {transitions.map(({ item, props: { height }, key }) => {
            return (
              <Row key={key}>
                <animated.div style={{ height }} css={{ overflow: "hidden" }}>
                  {item.paragraph}
                </animated.div>
              </Row>
            );
          })}
        </Body>
      </Root>
    </>
  );
};

export default IndexPage;
