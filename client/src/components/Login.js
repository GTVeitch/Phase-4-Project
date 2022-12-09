import React , { useState } from "react";

function Login({ setUser }) {

    const [username, setUsername] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => setUser(user));
    }

    return (
      <form onSubmit={handleSubmit} className="loginForm">
        {/* <h2>"Type your project name just as you did for our form, include the spaces:)"</h2> */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username..."/>
        <button type="submit">Login</button>
      </form>
    );
  }


export default Login