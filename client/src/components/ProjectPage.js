import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm"
import ProjectComments from "./ProjectComments"

function ProjectPage({ project, user }) {

    const [filler, setFiller] = useState({ comments: [] })

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${project.id}`)
            .then(r => r.json())
            .then(res => setFiller(res))

    }, [])




    const projectComments = filler.comments.map((comment) => {
        return (
            <ProjectComments comment={comment} user={user} key={comment.id}></ProjectComments>
        )
    })


    return (
        <div className="projectPage">
              <div className="navbarSpacer"></div>
            <h1 className="projectTitle">{project.name}</h1>
            <img className="projectImage" src={project.image} alt=""></img>
            <p><strong>Progress Update- </strong>{project.progress}</p>
            <p><strong>Challenges- </strong>{project.challenge}</p>
            <p><strong>Known Bugs- </strong>{project.bug}</p>
            <br></br>
            {user ? <CommentForm project={project} user={user} filler={filler} setFiller={setFiller}></CommentForm> : null}
            {projectComments}
            <div className="footerSpacer"></div>
        </div>
    )
}

export default ProjectPage