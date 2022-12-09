import React from "react";
import Login from "./Login";

function LoginPage ( { setUser } ) {

    return (
        <Login className="loginPage" setUser={setUser}>Login</Login>
    )

}

export default LoginPage
