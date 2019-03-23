import React from "react";
import styled from "@emotion/styled";
import { animated, useTransition } from "react-spring";

const Container = styled(animated.section)({
  display: "flex",
  minWidth: 700,
  margin: "0 auto",
  flexDirection: "column"
});

const Row = styled(animated.div)({
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
  {
    role: "Front End Developer",
    company: "Airwallex",
    dates: "Nov 2018 - Present"
  },
  {
    role: "Front End Developer",
    company: "Purplebricks",
    dates: "Jun 2017 - Nov 2018"
  },
  {
    role: "Front End Developer",
    company: "BBE",
    dates: "May 2015 - Jun 2017"
  }
];

const Skills = [
  { skill: "React", rating: 5 },
  { skill: "Typescript", rating: 3 },
  { skill: "ES6", rating: 5 },
  { skill: "Redux", rating: 4 },
  { skill: "Jest", rating: 3 },
  { skill: "Emotion", rating: 5 },
  { skill: "Git", rating: 4 },
  { skill: "Gatsby", rating: 5 },
  { skill: "Next", rating: 4 },
  { skill: "Node (Express)", rating: 3 },
  { skill: "GraphQL", rating: 3 }
];

const About = () => {
  const Rows = useTransition(WorkContent, i => i.company, {
    from: { opacity: 0, transform: "translateY(50px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(50px)" },
    trail: 150
  });

  return (
    <Container>
      <div css={{ display: "flex" }}>
        <Heading>Work History</Heading>
        <div css={{ marginLeft: "auto" }}>
          {Rows.map(({ item, key, props }) => (
            <Row style={props} key={key}>
              <HistoryContainer>
                <Heading>{item.role}</Heading>
                <Heading sub>{item.company}</Heading>
              </HistoryContainer>
              <Heading css={{ marginLeft: "auto", paddingLeft: 50 }}>
                {item.dates}
              </Heading>
            </Row>
          ))}
        </div>
      </div>
      <div css={{ display: "flex", marginTop: 60 }}>
        <Heading>Keyword Dump</Heading>
        <div css={{ marginLeft: "auto" }}>
          {Skills.map(skill => (
            <span>{skill.skill}</span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
