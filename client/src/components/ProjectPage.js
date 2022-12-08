import React from "react";
import CommentForm from "./CommentForm"

function ProjectPage ( { project } ) {

    fetch(`http://localhost:3000/projects${project.id}`)
    .then(r => r.json())
    .then(res => project = res)

    const projectComments = project.comments.map((comment ) => {
        return (
            <div>{comment.user}
                <div>{comment.content}</div>
                {comment.votes}
            </div>
        )
    })

    return (
        <>

            <h1>{project.name}</h1>
            <img src={project.image} ></img>
            <CommentForm project={project}></CommentForm>
            {projectComments}
        </>
    )
}

export default ProjectPage