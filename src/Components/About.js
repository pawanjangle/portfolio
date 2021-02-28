import React from "react";
import profilePic from "../Images/profilePic.jpg";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className="p-5 aboutGradient container-fluid" style={{ backgroundColor: "#2196f3" }}>
        <h3 className="text-white text-center">About Me</h3>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-md-4 text-center mt-3" style={{ maxHeight: "225px" }}>
            <img src={profilePic} alt="" style={{ height: "100%" }} />
          </div>
          <div className="col-md-8 text-white d-flex flex-column flex-wrap about p-3 mt-3">           
              Hi there! I am Pawan Jangle
              <br />I am a Full Stack Web Developer with React.js, Redux,
              Express.js, Node.js, Mongodb, and React Native as my tech stack.
              <br />
              I love learning about new technologies, What problems are they
              solving and How can I use them to build better and scalable
              products.
              <br />
              In 2018, I successfully completed my Engineering with
              specialization in 'Electrical, Electronics and Power Engineering'.
              <br />       
            <div className="d-flex justify-content-between flex-wrap m-3">
              <div className="m-3" >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="waves-effect waves-light btn-large">
                    Let's talk
                  </a>
                </Link>
              </div>
              <div className="m-3">
                <a
                  className="waves-effect waves-light btn-large"
                  href="https://drive.google.com/file/d/1M3vIIil62hdO4FkA6nJt7kF6ntvUTzAF/view?usp=sharing"
                >
                  My resume
                </a>
              </div>
              <div className="m-3">
                <a
                  className="waves-effect waves-light btn-large"
                  href="https://github.com/pawanjangle"
                >
                  Github
                </a>
              </div>
              <div className="m-3">
                <a
                  className="waves-effect waves-light btn-large"
                  href="https://linkedin.com/in/pawan-jangle-a53219191"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
