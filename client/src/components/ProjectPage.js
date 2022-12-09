import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm"

function ProjectPage({ project, user }) {

    const [filler, setFiller] = useState({ comments: [] })

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${project.id}`)
            .then(r => r.json())
            .then(res => setFiller(res))

    }, [])
    // console.log(project);

    const projectComments = filler.comments.map((comment) => {
        return (
            <div>{comment.user}
                <div>{comment.content}</div>
                {comment.votes}
            </div>
        )
    })


    return (
        <div className="projectPage">
            <h1>{project.name}</h1>
            <img className="mainImage" src={project.image} alt=""></img>
            <br></br>
            {user ? <CommentForm project={project} user={user}></CommentForm> : null}
            {projectComments}
        </div>
    )
}

export default ProjectPage