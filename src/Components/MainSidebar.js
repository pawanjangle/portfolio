import React from "react";
import profilePic from "../Images/profilePic.jpg";
import { Slide } from "react-reveal";
const MainSidebar = () => {
  return (
    <Slide right>
      <div
        className="d-flex flex-column col-md-3 hide-on hide-on-med-and-down sidebar pt-3 text-center px-3"
        style={{
          position: "absolute",
          top: "63px",
          height: "100vh",
        }}
      >
        <div className="my-3">
          <img
            className="bg-dark"
            src={profilePic}
            style={{ height: "100px", width: "100px", borderRadius: "50px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <h6 className="font-weight-bold text-white my-3">Pawan Jangle</h6>  
        <div className="d-flex align-items-center justify-content-center">
          <i class="material-icons tiny text-white mr-3">mail_outline</i>
          <h6 className="text-white my-3 p-2">Pawanjangle1000@gmail.com</h6>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <i class="material-icons tiny text-white my-3 mr-3">call</i>
          <h6 className="text-white">+91 9834301672</h6>
        </div>
        <div className="my-3 d-flex justify-content-around">
          <a className="waves-effect waves-light btn-floating social linkedin #f50057 pink accent-3">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="waves-effect waves-light btn-floating social google #f50057 pink accent-3">
            <i className="fa fa-google"></i>
          </a>
          <a className="waves-effect waves-light btn-floating social facebook #f50057 pink accent-3">
            <i class="fa fa-facebook"></i>
          </a>
          <a className="waves-effect waves-light btn-floating social instagram #f50057 pink accent-3">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </Slide>
  );
};

export default MainSidebar;
