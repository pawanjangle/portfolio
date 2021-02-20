import React from "react";
import profilePic from "../Images/profilePic.jpg";
const ProjectData = () => {
  return (
    <div className="projectData col-md-4 m-3 p-5">
      <div className="text-center">
        <img src={profilePic} alt="" style={{ height: "250px" }} />
      </div>
      <div>
        <a class="waves-effect waves-light btn-small">SEE LIVE</a>
        <a class="waves-effect waves-light btn-small">SOURCE CODE</a>
        <a class="waves-effect waves-light btn-small">WATCH VIDEO</a>
      </div>
    </div>
  );
};

export default ProjectData;
