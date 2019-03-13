import React from "react";
import Link from "../components/link/link";

const About = () => (
  <div>
    ytb{" "}
    <Link
      href="/"
      exit={{
        length: 0.6
      }}
      entry={{
        delay: 1
      }}
    >
      Go back
    </Link>
  </div>
);

export default About;
