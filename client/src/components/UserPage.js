import React from "react";

function UserPage ( { user } ) {

    fetch(`http://localhost:3000/users/${user.id}`)
    .then(r=>r.json())
    .then(res => {
        user = res
    })



    const userComments = user.comments.map((comment) => {
        return (
            <div>{comment.content}</div>
        )
    })

    return (
        <>
            <div>{user.username}</div>
            {userComments}
        </>

    )

}

export default UserPage
