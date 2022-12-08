import React from "react";
import Login from "./Login";

function LoginPage ( { setUser } ) {

    return (
        <Login onLogin={setUser}>Login</Login>
    )

}

export default LoginPage