import React from "react";
import Login from "./Login";

function LoginPage ( { setUser , user } ) {

    return (
        <div className="loginBackground">

            <Login className="loginPage" setUser={setUser} user={user}>Login</Login>
        </div>
    )

}

export default LoginPage
