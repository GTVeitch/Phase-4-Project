import React from "react";
import CommentForm from "./CommentForm"

function ProjectPage({ project, user }) {

    fetch(`http://localhost:3000/projects/${project.id}`)
        .then(r => r.json())
        .then(res => project = res)

    let projectComments = null

    if (project.comments) {
        projectComments = project.comments.map((comment) => {
            return (
                <div>{comment.user}
                    <div>{comment.content}</div>
                    {comment.votes}
                </div>
            )
        })
    }

    return (
        <>
            <h1>{project.name}</h1>
            <img className="mainImage" src={project.image} alt=""></img>
            <br></br>
            {user ? <CommentForm project={project} user={user}></CommentForm> : null}
            {projectComments}
        </>
    )
}

export default ProjectPage