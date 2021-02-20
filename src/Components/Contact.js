import React from "react";

const Contact = () => {
  return (
    <div className="d-flex justify-content-around py-5 flex-wrap container-fluid bg-white text-dark">
      <div className="col-md-4 contact p-5 m3 ">
        <h3 className="text-center ">Hire Me.</h3>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Message" />
        <div className="text-center">
          <button
            className="btn waves-effect waves-light large mt-3"
            type="submit"
            name="action"
            style={{ backgroundColor: "#f50057" }}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
      <div className="col-md-4 d-flex flex-column justify-content-center contact  p-5">
      <h3 className="text-center">Get in touch</h3>
      <div className="d-flex align-items-center"> 
        <i className="material-icons">location_on</i>
        <h6> Gurudev Ward, Ward No. 6, Bhiwapur. Dist. Nagpur - 441201</h6></div>
        <div className="d-flex align-items-center"><i className="material-icons">call</i>
        <h6> +91 9834301672</h6></div> 
        <div className="d-flex align-items-center"> <i className="material-icons">mail_outline</i>
        <h6> pawanjangle1000@gmail.com</h6></div>
        <div className="d-flex justify-content-around my-3">
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
    </div>
  );
};

export default Contact;
