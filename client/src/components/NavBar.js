import React from "react";
import { Link } from "react-router-dom"

function Navbar({ user, setUser }) {

    function logout(e) {
        e.preventDefault();
        fetch("http://localhost:3000/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user.username),
        })
            .then(setUser(null));
    }


    return (
        <>

            <Link to="/"> Home </Link>

            {user ? <span onClick={logout}>Logout</span> : <Link to="/login">Login</Link>}

        </>
    )
}

export default Navbar