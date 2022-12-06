import React, { useState, useEffect } from 'react';
import { Switch , Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"

function App() {

  const [allCom, setAllComm] = useState([])
  const [allProjects, setAllProjects] = useState([{}, {}, {}])



  useEffect(() => {
    fetch("/comments")
    .then(r=>r.json())
    // .then(res => {
    //     setAllComm(res)
    // })
  }, [])



  return (
    <>
      <NavBar></NavBar>

      <Switch>


        <Route path="/">
          <HomePage allProjects={allProjects}></HomePage>
        </Route>

      </Switch>
    </>
  );
}

export default App;
