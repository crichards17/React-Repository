import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectContainer() {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-sm my-2">
                    <ProjectCard 
                        title="Bev-films"
                        image="https://github.com/n8blake/bev-films/blob/main/public/assets/Function_Demo.png?raw=true"
                        description="An Express-server app that uses basic machine learning and multiple web APIs to recommend drink pairings for your favorite movies"
                        github="https://github.com/n8blake/bev-films"
                        deployed="https://n8blake.github.io/bev-films/"
                    />
                </div>
                <div className="col-sm my-2">
                    <ProjectCard 
                        title="React Employee Repository"
                        image="https://raw.githubusercontent.com/crichards17/React-Employee-Repository/main/Assets/Directory_Demo.gif"
                        description="A sample sortable and searchable directory application built using React and MongoDB via Mongoose"
                        github="https://github.com/crichards17/React-Employee-Repository"
                        deployed="https://crichards17.github.io/React-Employee-Repository//"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm my-2">
                    <ProjectCard 
                        title="Tech Blog"
                        image="https://raw.githubusercontent.com/crichards17/Tech-Blog/main/assets/sample.PNG"
                        description="An webapp representing a blog page, with user-post association and favorites system, built with Node, Express, and MongoDB"
                        github="https://github.com/crichards17/Tech-Blog"
                        deployed="https://radiant-depths-71244.herokuapp.com/"
                    />
                </div>
                <div className="col-sm my-2">
                    <ProjectCard 
                        title="React Employee Repository"
                        image="https://raw.githubusercontent.com/crichards17/React-Employee-Repository/main/Assets/Directory_Demo.gif"
                        description="A sample sortable and searchable directory application built using React and MongoDB via Mongoose"
                        github="https://github.com/crichards17/React-Employee-Repository"
                        deployed="https://crichards17.github.io/React-Employee-Repository//"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;