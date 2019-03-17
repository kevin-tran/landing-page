import React, { createContext, useState } from "react";

const currentDate = new Date();

export const TimeContext = createContext({
  time: {},
  setNewTime: () => {}
});

const TimeProvider = ({ children }) => {
  const setNewTime = time => {
    setTime(prevState => {
      return {
        ...prevState,
        time
      };
    });
  };

  const state = {
    time: currentDate,
    setNewTime
  };

  const [time, setTime] = useState(state);

  return <TimeContext.Provider value={time}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
