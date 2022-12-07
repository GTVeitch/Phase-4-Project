import React from "react";
import { Link } from "react-router-dom"

function ProjectCard ( { project } ) {

    return (
        <div>

            <Link to={`/projects/${project.id}`}>{project.name?project.name:"No Name"} <img src={`${project.image}`} className="cardImage"></img> </Link>

        </div>
    )
}

export default ProjectCard