import React from "react";
import ProjectCard from "./ProjectCard"

function HomePage ( { allProjects } ) {


    const shownCards = allProjects.map((project) => {
        return (
            <ProjectCard  project={project} key={project.id}/>
        )
    })

    return (
        <div className="homePage">
            <div className="navbarSpacer"></div>
            {shownCards}
            <div className="footerSpacer"></div>
        </div>
    )
}


export default HomePage