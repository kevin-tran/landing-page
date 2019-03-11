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
  position: "absolute",
  display: "flex"
});

const Body = styled(animated.h3)(({ theme }) => ({
  fontSize: 32,
  lineHeight: 1.4,
  fontWeight: theme.font.reg,
  margin: 0
}));

const WaveHeading = ({ style: { shake, ...rest } }) => {
  return (
    <Heading style={rest}>
      Hi!{" "}
      <animated.div
        role="img"
        aria-label="wave emoji"
        style={{
          transform: shake
            .interpolate({
              range: [0.2, 0.5, 0.7, 1],
              output: [1, 0.95, 1.05, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}
      >
        👋
      </animated.div>
    </Heading>
  );
};

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
        tincidunt eros <Link href="/about">test</Link> eu. Nunc facilisis ipsum
      </Content>
    ),
    key: "paragraph-3"
  },
  {
    paragraph: (
      <Content>
        finibus velit accumsan, eget porta <Link href="/about">eros</Link>{" "}
        mollis
      </Content>
    ),
    key: "paragraph-4"
  }
];

const IndexPage = ({ transitionStatus, entry, exit }) => {
  const isActive = transitionStatus === "entered";

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
      await next({ shake: 1 });
      await next({ opacity: 0, transform: "translateY(50px)" });
    },
    from: {
      opacity: 0,
      transform: "translateY(50px)",
      shake: 0
    },
    ref: landingRef
  });

  const transitionRef = useRef();
  const transitions = useTransition(BodyContent, item => item.key, {
    from: { height: 0 },
    enter: { height: useTransition ? 44 : 0 },
    leave: { height: 0 },
    ref: transitionRef
  });

  useChain(homeHasLoaded ? [transitionRef] : [landingRef, transitionRef]);

  return (
    <>
      <SEO title="Home" keywords={["gatsby", "react", "portfolio"]} />
      <Root>
        <WaveHeading style={landingProps} />
        <Body css={{ maxWidth: 1200 }}>
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
