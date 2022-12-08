import React from "react";
import { Link } from "react-router-dom"

function Navbar ( { user } ) {

    return (
        <>

            <Link to="/"> Home </Link>

            {user?<Link to={`/users/${user.username}`}>{user.username}</Link>:<Link to="/login">Login</Link>}
        </>
    )
}

export default Navbar