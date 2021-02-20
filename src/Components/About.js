import React from "react";
import profilePic from "../Images/profilePic.jpg";
import {Link} from "react-scroll";
const About = () => {
  return (
    <div className="about p-5">
      <h3 className=" text-center text-white">About Me</h3>
      <div className="d-flex container flex-wrap justify-content-center ">
        <div className="col-md-4 text-center" style={{ maxHeight: "300px" }}>
          <img src={profilePic} alt="" style={{ height: "100%" }} />
        </div>
        <div className="col-md-8 text-white">
          Hi there! I am <strong>&nbsp;Pawan Jangle</strong>
          <br />I am a Full Stack Web Developer with React.js, Redux,
          Express.js, Node.js, Mongodb, and React Native as my tech stack.
          <br />
          I love learning about new technologies, what problems are they solving
          and How can I use them to build better and scalable products.
          <br />
          In 2018, I successfully completed my Engineering with specialization
          in 'Electronics and Telecommunication'.
          <br />
          <div className="d-flex justify-content-center flex-wrap">
            <div>
              <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <button className="m-2">
                  Let's talk
                </button>
              </Link>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="m-2" variant="outline-success">
                  My Resume
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/pawanjangle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="m-2">
                  GitHub
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/pawan-jangle-a53219191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="m-2">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
