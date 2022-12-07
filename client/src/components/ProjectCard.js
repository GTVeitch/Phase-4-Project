import React from "react";
import { Link } from "react-router-dom"

function ProjectCard ( { project } ) {

    return (
        <div>
            <Link to={`/projects/${project.id}`}>{project.name?project.name:"No Name"}</Link>
        </div>
    )
}

export default ProjectCard