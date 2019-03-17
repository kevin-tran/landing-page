import React, { useContext } from "react";
import { formatToTimeZone } from "date-fns-timezone";
import { TimeContext } from "global/context/timeContext";

import SetInterval from "components/setInterval/setInterval";

const Clock = props => {
  const { time, setNewTime } = useContext(TimeContext);

  SetInterval(() => setNewTime(new Date()), 60000);

  const date = formatToTimeZone(time, "hh:mm a", {
    timeZone: "Australia/Melbourne"
  });
  return <span {...props}>{date}</span>;
};

export default Clock;
