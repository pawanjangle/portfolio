import React from "react";
import profilePic from "../Images/profilePic.jpg";
const MainSidebar = () => {
  return (
    <div
      className="d-flex flex-column align-items-center col-md-3 hide-on hide-on-med-and-down sidebar"
      style={{
        opacity: "0.3",
        position: "absolute",
        top: "63px",
        zIndex: "1",
        height: "100vh",
        textAlign: "center",
        color: "white",   
      }}
    >
      <div style={{ maxHeight: "100px", textAlign: "center" }}>
        <img
          className="circle"
          src={{ profilePic }}
          style={{ height: "100px", objectFit: "contain" }}
          alt=""
        />
      </div>
      <h6 className="font-weight-bold">Pawan Jangle</h6>
      <h6>Pawanjangle1000@gmail.com</h6>
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
  );
};

export default MainSidebar;
