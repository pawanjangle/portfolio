import React, { useState } from "react";
import { Rotate } from "react-reveal";
import emailjs from "emailjs-com";
import M from "materialize-css";
const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);
  const templateParams = {
    name,
    email,
    phone,
    message,
  };
  const sendMail = () => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (response) => {
          M.toast({html: `Thank you for enquiry mr. ${name}`, classes: "#ff1744 green accent-3"})         
        },
        (err) => {
          M.toast({html: `Something went wrong`, classes: "#f50057 pink accent-3"})   
        }
      );
  };
  return (
      <div className="d-flex justify-content-around flex-wrap container-fluid bg-white flex-wrap pb-5">
        <div className="col-md-4 contact mt-5 py-5">
          <h3 className="text-center ">Hire Me.</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="text-center mt-3">
            <button
              className="btn waves-effect waves-light large"
              type="submit"
              name="action"
              style={{ backgroundColor: "#f50057" }}
              onClick={() => {
                sendMail();             
              }}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column contact mt-5 py-5 px-5">
          <h3 className="text-center">Get in touch</h3>
          <div className="d-flex align-items-center">
            <i className="material-icons mr-3">location_on</i>
            <h6> Gurudev Ward, Ward No. 6, Bhiwapur. Dist. Nagpur - 441201</h6>
          </div>
          <div className="d-flex align-items-center">
            <i className="material-icons mr-3">call</i>
            <h6> +91 9834301672</h6>
          </div> 
          <div className="d-flex align-items-center">
            <i className="material-icons mr-3">mail_outline</i>
            <h6> pawanjangle1000@gmail.com</h6>
          </div>
          <div className="d-flex justify-content-around my-3">
            <Rotate>
              <a className="waves-effect waves-light btn-floating social linkedin #f50057 pink accent-3">
                <i className="fa fa-linkedin"></i>
              </a>
            </Rotate>
            <Rotate>
              <a className="waves-effect waves-light btn-floating social google #f50057 pink accent-3">
                <i className="fa fa-google"></i>
              </a>
            </Rotate>
            <Rotate>
              <a className="waves-effect waves-light btn-floating social facebook #f50057 pink accent-3">
                <i class="fa fa-facebook"></i>
              </a>
            </Rotate>
            <Rotate>
              <a className="waves-effect waves-light btn-floating social instagram #f50057 pink accent-3">
                <i className="fa fa-instagram"></i>
              </a>
            </Rotate>
          </div>
        </div>
      </div>
  );
};

export default Contact;
