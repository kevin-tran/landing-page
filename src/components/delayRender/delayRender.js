import React, { useEffect, useState } from "react";
import SetTimeout from "components/setTimeout/setTimeout";

const DelayRender = ({ children }) => {
  const [shouldRender, setShouldRender] = useState(false);

  SetTimeout(() => setShouldRender(true), 300);

  return shouldRender ? children : null;
};

export default DelayRender;
