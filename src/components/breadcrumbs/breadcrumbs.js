import React from "react";
import { useTransition, animated } from "react-spring";

import { FormatHistoryPath } from "utils/format/format";

const Breadcrumbs = ({ pathname }) => {
  const slugs = FormatHistoryPath(pathname);

  const transitions = useTransition(slugs, item => item, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" }
  });

  if (slugs === null) return null;

  return (
    <span>
      /
      {transitions.map(({ item, key, props }) => (
        <animated.span>{item}</animated.span>
      ))}
    </span>
  );
};

export default Breadcrumbs;
