import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
const footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5rem",
        position: "absolute",
        bottom: "10px",
        width: "100%",
        height: "2.5rem",
        right: 0,
        left: 0,
      }}
    >
      <h2 style={{ fontSize: "4rem" }}>Let`s connect.</h2>
      <div>
        <a href="https://www.instagram.com/_memphisto/">
          <AiFillInstagram size={32} />
        </a>
        <a href="https://github.com/Bonitoflakes">
          <AiFillGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/rishab-khivsara-196383202/">
          <AiFillLinkedin size={32} />
        </a>
      </div>
    </footer>
  );
};

export default footer;
