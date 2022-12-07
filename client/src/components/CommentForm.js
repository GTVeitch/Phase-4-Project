import React from "react";

function CommentForm ( {project} ) {

    function postComment (e) {
        e.preventDefault()
    }

    return (
        <>
            <btn onClick={postComment}>Comment</btn>
        </>
    )
}


export default CommentForm