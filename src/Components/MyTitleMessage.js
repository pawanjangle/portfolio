import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

export default function Titlemessage() {
  return (
    <div
      className="col-md-12 d-flex flex-column justify-content-center flex-wrap"
      style={{
        opacity: "1",
        position: "absolute",
        width: "100%",
        top: "22rem",
        zIndex: "1",
        color: "#f50057",
      }}
    >
      <div className="main text-center mb-3">
        Hi, I am
        <br />
        <h4>
          <strong>Pawan Jangle</strong>
        </h4>
      </div>
      <div className="sub text-center">
        <Typewriter
          options={{
            strings: [
              "Mern Stack Developer",
              "React Native Developer",
              "Graphic Designer",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>
    </div>
  );
}
