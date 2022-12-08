import React from "react";
import CommentForm from "./CommentForm"

function ProjectPage({ project, user }) {

    return (
        <>

            <h1>{project.name}</h1>
            <img className="mainImage" src={project.image}></img>
            <br></br>
            <CommentForm project={project} user={user}></CommentForm>
        </>
    )
}

export default ProjectPage