import React from "react";
import ProjectData from "./ProjectData";
import netshop from "../Images/netshopss.png";
import instagramss from "../Images/profile.png";
const ecommerce = {
  pic: netshop,
  liveUrl: "http://netshopee.herokuapp.com",
  githubUrl: "https://github.com/pawanjangle/netshop",
  videoUrl: "https://www.linkedin.com/posts/pawanjangle_netshop-today-i-created-fully-responsive-activity-6771414738598543360-kInx/",
};
const instagram = {
  pic: instagramss,
  liveUrl: "http://react-instagramclone.herokuapp.com",
  githubUrl: "https://github.com/pawanjangle/react-insta-clone",
  videoUrl: "http://react-instagramclone.herokuapp.com",
};
const portfolio = {
  pic: netshop,
  liveUrl: "http://insta.herokuapp.com",
  githubUrl: "https://github.com/pawanjangle/portfolio",
  videoUrl: "http://netshopee.herokuapp.com",
};
const Projects = () => {
  return (
    <div className="py-5 container-fluid">
      <h4 className="text-center text-white mb-5">Projects</h4>
      <div className="d-flex flex-wrap justify-content-around">
        <ProjectData project={ecommerce} />
        <ProjectData project={instagram} />
        <ProjectData project={portfolio} />
      </div>
    </div>
  );
};

export default Projects;
