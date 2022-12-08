import React, { useState, useEffect } from 'react';
import { Switch , Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ProjectPage from "./components/ProjectPage"

function App() {

  const [allCom, setAllComm] = useState([ {} , {} ])
  const [allProjects, setAllProjects] = useState([ {} , {} ])


 console.log(document.cookie)

  useEffect(() => {
    fetch("http://localhost:3000/projects")
    .then(r => r.json())
    .then(re => {
        setAllProjects(re)
    })
    fetch("http://localhost:3000/comments")
    .then(r => r.json())
    .then(re => {
      setAllComm(re)
    })
  }, [])


  const projectPages = allProjects.map((project) => {
    return (
        <Route exact path={`/projects/${project.id}`}  key={project.id}>
          <ProjectPage project={project} allCom={allCom}  key={project.id}></ProjectPage>
        </Route>
    )
  })

  return (
    <>
      <NavBar></NavBar>

      <Switch>

        {projectPages}

        <Route path="/">
          <HomePage allProjects={allProjects}></HomePage>
        </Route>

      </Switch>
    </>
  );
}

export default App;
