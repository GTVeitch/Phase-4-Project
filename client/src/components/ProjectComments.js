import React, {useState , useEffect} from "react";

function ProjectComments( { comment = {likes: 0} , user } ) {

    const [likes, setLikes] = useState(comment.likes)


        function handleDelete (e) {
        e.preventDefault()
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method : "DELETE"
        })}

        function handleLikes(e) {
            fetch(`http://localhost:3000/comments/${comment.id}`, {
                method : "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body : JSON.stringify({...comment, likes: (comment.likes + 1)})
            })
            .then(r=>r.json())
            setLikes(likes+1)

        }


        return (
            <div key={comment.id}>{comment.username}
                <div>{comment.content}
                {user?((user.username===comment.username)?<button onClick={handleDelete}>Delete</button>:null):null}</div>
                <span onClick={handleLikes}>{likes}</span>

            </div>
        )



}

export default ProjectComments