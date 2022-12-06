import React, { useState, useEffect } from 'react';
import { Switch , Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ProjectPage from "./components/ProjectPage"

function App() {

  const [allCom, setAllComm] = useState([ {} , {} ])
  const [allProjects, setAllProjects] = useState([ {} , {} ])



  useEffect(() => {
    fetch("/projects")
    .then(r => r.json())
    .then(re => {
        console.log(re)
        setAllProjects(re)
    })
    fetch("/comments")
    .then(r => r.json())
    .then(re => {
      console.log(re)
      setAllComm(re)
    })
  }, [])


  const projectPages = allProjects.map((project) => {
    return (
        <Route exact path={`/projects/${project.id}`} key={project.id}>
          <ProjectPage project={project} allCom={allCom}></ProjectPage>
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
