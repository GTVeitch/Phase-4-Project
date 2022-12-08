import React, { useState } from "react";

function CommentForm({ project, user }) {

    const [newComment, setNewComment] = useState({
        username: user.username,
        user_id: user.id,
        content: null,
        votes: 0,
        project_id: project.id,
    })

    function handleChange(e) {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value,
        })
            .then(r => r.json())
            .then(res => {
                project.comments.push(res)
            })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
    }


    return (
        <div id="commentFormHolder">
            <form id="commentForm">
                <input type="text" name="content" placeholder="Enter Comments" onChange={handleChange} />
                <input type="submit" value="Add" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    )
}

export default CommentForm;



















