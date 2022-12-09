import React from "react";
import Login from "./Login";

function LoginPage ( { setUser } ) {

    return (
        <div className="loginBackground">
            
            <Login className="loginPage" setUser={setUser}>Login</Login>
        </div>
    )

}

export default LoginPage
