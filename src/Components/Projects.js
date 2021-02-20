import React from 'react'
import ProjectData from "./ProjectData"
import Rotate from "react-reveal"
const Projects = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between">
            <ProjectData />
            <ProjectData />
            <ProjectData />
            <ProjectData />
        </div>
    )
}

export default Projects
