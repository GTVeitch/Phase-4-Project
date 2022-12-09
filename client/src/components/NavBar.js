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
        <div className="navBar">

            <Link className="homeLink" to="/"><h1 className="title">WNTD</h1></Link>



            {user ?
            <span className="loginLink" onClick={logout}>Logout</span> :
            <Link className="loginLink" to="/login">Login</Link>}

        </div>
    )
}

export default Navbar