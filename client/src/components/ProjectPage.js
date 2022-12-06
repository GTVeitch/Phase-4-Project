import React from "react";
import CommentForm from "./CommentForm"

function ProjectPage ( { project , allCom } ) {

    return (
        <>

            <h1>{project.name}</h1>
            <img src={project.image} ></img>
            <CommentForm project={project}></CommentForm>
        </>
    )
}

export default ProjectPage