import React from "react";
import ProjectData from "./ProjectData";
import netshop from "../Images/netshopss.png";
import instagramss from "../Images/profile.png";
import portfolioss from "../Images/portfolioss.png";
import { Rotate } from "react-reveal";
const ecommerce = {
  pic: netshop,
  liveUrl: "http://netshopee.herokuapp.com",
  githubUrl: "https://github.com/pawanjangle/netshop",
  videoUrl:
    "https://www.linkedin.com/posts/pawanjangle_netshop-today-i-created-fully-responsive-activity-6771414738598543360-kInx/",
};
const instagram = {
  pic: instagramss,
  liveUrl: "http://react-instagramclone.herokuapp.com",
  githubUrl: "https://github.com/pawanjangle/react-insta-clone",
  videoUrl:
    "https://www.linkedin.com/posts/pawanjangle_instagramclone-social-activity-6771762546635616256-h-Wf",
};
const portfolio = {
  pic: portfolioss,
  liveUrl: "http://pawanjangle.netlify.app",
  githubUrl: "https://github.com/pawanjangle/portfolio",
  videoUrl: "",
};
const Projects = () => {
  return (
    <div className="py-5 container-fluid">
      <h4 className="text-center text-white font-weight-bold">Projects</h4>
      <Rotate> <div className="d-flex flex-wrap justify-content-around flex-wrap mt-5">    
          <ProjectData project={ecommerce} />
          <ProjectData project={instagram} />
          <ProjectData project={portfolio} />        
      </div></Rotate>
    </div>
  );
};

export default Projects;
