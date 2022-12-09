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
              <div className="navbarSpacer"></div>
            <h1 className="projectTitle">{project.name}</h1>
            <img className="projectImage" src={project.image} alt=""></img>
            <br></br>
            {user ? <CommentForm project={project} user={user}></CommentForm> : null}
            <p><strong>Progress Update- </strong>{project.progress}</p>
            <p><strong>Challenges- </strong>{project.challenge}</p>
            <p><strong>Known Bugs- </strong>{project.bug}</p>


            <p><strong>-Comments-</strong></p>
            {projectComments}
            <div className="footerSpacer"></div>
        </div>
    )
}

export default ProjectPage