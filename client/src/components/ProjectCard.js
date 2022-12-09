import React from "react";
import { Link } from "react-router-dom"


function ProjectCard({ project }) {

    return (
        <div className="cards">

            <Link to={`/projects/${project.id}`} className="cardTitle">{project.name ? project.name : "No Name"}
                <img className="cardImage" src={project.image} alt=""></img>

            </Link>
        </div>
    )
}

export default ProjectCard