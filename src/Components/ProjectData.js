import React from "react";
const ProjectData = ({ project}) => {
  return (
    <div className="projectData d-flex flex-column justify-content-center col-md-4 m-2">
      <div className="p-4">
        <img
          src={project.pic}
          alt=""
          style={{width: "100%",}}
        />
      </div>
      <div className="d-flex justify-content-center my-3 flex-wrap">
      <a className="waves-effect waves-light btn-small" href={project.liveUrl}>SEE LIVE</a>
      <a className="waves-effect waves-light btn-small" href={project.githubUrl}>SOURCE CODE</a>
      <a className="waves-effect waves-light btn-small" href={project.videoUrl}>VIDEO</a>
      </div>
    </div>
  );
};

export default ProjectData;
