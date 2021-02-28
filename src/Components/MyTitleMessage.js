import React from "react";
import Typewriter from "typewriter-effect";
import {Zoom} from "react-reveal"
export default function Titlemessage() {
  return (
    <Zoom><div
      className="col-md-12 d-flex flex-column justify-content-center flex-wrap align-items-center" style={{position: "absolute", top: "30vh"}}    
    >
      <div className="mb-3 text-center">
        <h5 className="text-white">Hi, I am</h5>
        <br />
        <h4 style={{color: "#f50057"}}>
          <strong className="font-weight-bold">Pawan Jangle</strong>
        </h4>
      </div>
      <div style={{color: "white", fontSize: "22px"}}>
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
    </Zoom>
  );
}
