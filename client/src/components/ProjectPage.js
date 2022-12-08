import React from "react";
import CommentForm from "./CommentForm"

function ProjectPage ( { project , allCom } ) {

    fetch(`http://localhost:3000/projects${project.id}`)
    .then(r => r.json())
    .then(re => project = re)

    return (
        <>

            <h1>{project.name}</h1>
            <img src={project.image} ></img>
            <CommentForm project={project}></CommentForm>
        </>
    )
}

export default ProjectPage