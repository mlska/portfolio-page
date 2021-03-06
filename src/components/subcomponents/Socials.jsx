import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/kamil-malesa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/mlska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </>
  );
};

export default Socials;
