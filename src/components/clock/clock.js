import React from "react";
import { formatToTimeZone } from "date-fns-timezone";

const Clock = props => {
  const date = formatToTimeZone(new Date(), "hh:mm a", {
    timeZone: "Australia/Melbourne"
  });
  return <span {...props}>{date}</span>;
};

export default Clock;
