import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ProjectPage from "./components/ProjectPage"
import UserPage from "./components/UserPage"
import LoginPage from './components/LoginPage';

function App() {

  const [allProjects, setAllProjects] = useState([{}, {}])
  const [user, setUser] = useState();
  const [allUsers, setAllUsers] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(r => r.json())
      .then(re => {
        setAllProjects(re)
      })
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    })
    fetch("http://localhost:3000/users")
      .then(r => r.json())
      .then(res => {
        setAllUsers(res)
      })
  }, [])


  const projectPages = allProjects.map((project) => {
    return (
      <Route exact path={`/projects/${project.id}`} key={project.id}>
        <ProjectPage project={project} user={user} key={project.id}></ProjectPage>
      </Route>
    )
  })

  const userPages = allUsers.map((user) => {
    return (
      <Route exact path={`/users/${user.username}`} key={user.id}>
        <UserPage user={user} key={user.id}></UserPage>
      </Route>
    )
  })

  return (
    <>
      <NavBar user={user} setUser={setUser}></NavBar>

      <Switch>

        <Route exact path="/login">
          <LoginPage setUser={setUser} user={user}></LoginPage>
        </Route>

        {projectPages}

        {userPages}

        <Route path="/">
          <HomePage allProjects={allProjects}></HomePage>
        </Route>

      </Switch>
    </>
  );
}

export default App;
