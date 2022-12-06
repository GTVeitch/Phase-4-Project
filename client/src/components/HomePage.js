import React from "react";
import ProjectCard from "./ProjectCard"

function HomePage ( { allProjects } ) {

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffle(allProjects)

    const shownCards = allProjects.slice(0, 5).map((project) => {
        return (
            <ProjectCard project={project} key={project.id}/>
        )
    })


    return (
        <>
            {shownCards}
        </>
    )
}


export default HomePage