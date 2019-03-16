import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useSpring, useChain, animated, useTransition } from "react-spring";

const Container = styled(animated.section)({
  display: "flex",
  minWidth: 700,
  margin: "0 auto",
  flexDirection: "column"
});

const Row = styled("div")({
  display: "flex",
  width: "100%",
  marginBottom: 32
});

const HistoryContainer = styled("div")({
  display: "flex",
  flexDirection: "column"
});

const Heading = styled("h2")(({ sub }) => ({
  fontWeight: sub ? 700 : 400,
  marginTop: 0,
  marginBottom: 8,
  textAlign: "left"
}));

const WorkContent = [
  <Row>
    <HistoryContainer>
      <Heading>Front End Developer</Heading>
      <Heading sub>Airwallex</Heading>
    </HistoryContainer>
    <Heading css={{ marginLeft: "auto" }}>Nov 2018 - Present</Heading>
  </Row>,
  <Row>
    <HistoryContainer>
      <Heading>Front End Developer</Heading>
      <Heading sub>Purplebricks</Heading>
    </HistoryContainer>
    <Heading css={{ marginLeft: "auto" }}>Jun 2017 - Nov 2018</Heading>
  </Row>,
  <Row>
    <HistoryContainer>
      <Heading>Front End Developer</Heading>
      <Heading sub>BBE</Heading>
    </HistoryContainer>
    <Heading css={{ marginLeft: "auto" }}>May 2015 - Jun 2017</Heading>
  </Row>
];

const About = () => {
  const ContainerRef = useRef();
  const ContainerProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    ref: ContainerRef
  });

  const RowsRef = useRef();
  const Rows = useTransition(WorkContent, null, {
    from: { opacity: 0, transform: "translateY(50px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(50px)" },
    trail: 150,
    ref: RowsRef
  });

  useChain([ContainerRef, RowsRef], [1, 1]);

  return (
    <Container>
      {Rows.map(({ item, key, props }) => (
        <animated.div style={props} key={key}>
          {item}
        </animated.div>
      ))}
    </Container>
  );
};

export default About;
