/** @jsx jsx */

import React, { useContext, useEffect } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useSpring, useChain, useTransition, animated } from "react-spring";
import { PageViewContext } from "global/context/pageViewContext";

import SEO from "components/seo/seo";
import Link from "components/link/link";

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
  display: "flex",
  opacity: 0
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
      <animated.span
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
        css={{ display: "block" }}
      >
        👋
      </animated.span>
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

const IndexPage = () => {
  const { homeHasLoaded, setHasLoaded } = useContext(PageViewContext);

  useEffect(() => {
    return () => {
      if (!homeHasLoaded) {
        setHasLoaded();
      }
    };
  }, [homeHasLoaded]);

  const landingRef = React.useRef();
  const landingProps = useSpring({
    to: [
      { opacity: 1, transform: "translateY(0)" },
      { shake: 1 },
      {
        opacity: 0,
        transform: "translateY(-100%)"
      }
    ],
    from: {
      opacity: 0,
      transform: "translateY(50px)",
      shake: 0
    },
    ref: landingRef,
    delay: 800
  });

  const transitionRef = React.useRef();
  const transitions = useTransition(BodyContent, item => item.key, {
    from: { height: 0 },
    enter: { height: 44 },
    leave: { height: 0 },
    ref: transitionRef,
    trail: 150
  });

  useChain(
    homeHasLoaded ? [transitionRef] : [landingRef, transitionRef],
    homeHasLoaded ? [0.6] : null
  );

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
