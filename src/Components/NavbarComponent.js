import React, { useEffect } from "react";
import { Link } from "react-scroll";
import M from "materialize-css";
import profilePic from "../Images/profilePic.jpg";
const NavbarComponent = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="navbarglass">
          <div className="nav-wrapper px-4">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                className="brand-logo"
                style={{ fontFamily: "Grand Hotel cursive", cursor: "pointer"}}
              >
                Portfolio
              </a>
              <a data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav text-center" id="mobile-demo">
        <li className="nav-item sidenav-close">
          <div className="my-3">
            <img
              className="bg-light"
              src={profilePic}
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                objectFit: "contain",
              }}
              alt=""
            />
          </div>
        </li>
        <h6 className="font-weight-bold text-dark ">Pawan Jangle</h6>
        <div className="d-flex align-items-center justify-content-center">
          <i className="material-icons tiny text-dark mr-3">mail_outline</i>
          <h6 className="text-dark p-2">Pawanjangle1000@gmail.com</h6>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <i class="material-icons tiny text-dark my-3 mr-3">call</i>
          <h6 className="text-dark">+91 9834301672</h6>
        </div>

        <li className="nav-item sidenav-close">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item sidenav-close">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-item sidenav-close">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item sidenav-close">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item sidenav-close">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <div className="my-3 d-flex justify-content-around">
          <a
            href="https://linkedin.com/in/pawan-jangle-a53219191"
            className="waves-effect waves-light btn-floating social linkedin #f50057 pink accent-3"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            href="https://pawanjangle@gmail.com"
            className="waves-effect waves-light btn-floating social google #f50057 pink accent-3"
          >
            <i className="fa fa-google"></i>
          </a>

          <a
            href="https://www.facebook.com/pawan.jangle.7"
            className="waves-effect waves-light btn-floating social facebook #f50057 pink accent-3"
          >
            <i class="fa fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/pawandjangle/"
            className="waves-effect waves-light btn-floating social instagram #f50057 pink accent-3"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default NavbarComponent;
