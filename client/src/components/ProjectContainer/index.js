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
                        title="Google Books Search"
                        image="https://github.com/crichards17/Google-Books-Search/blob/main/assets/images/Sample.PNG?raw=true"
                        description="An application allowing a user to search the Google Books library for titles, review details and external links for those titles, and manage a Saved list."
                        github="https://github.com/crichards17/Google-Books-Search"
                        deployed="https://google-book-search-cr.herokuapp.com/"
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
            <div className="row">
                <div className="col-sm my-2">
                    <ProjectCard 
                        title="Fitness Tracker"
                        image="https://raw.githubusercontent.com/crichards17/Tech-Blog/main/assets/sample.PNG"
                        description="A workout-tracking application demonstrating usage of Express.js with a MongoDB back end via Mongoose."
                        github="https://github.com/crichards17/Fitness-tracker"
                        deployed="https://fitness-tracker-cr.herokuapp.com/?id=60c88fb69ee6ca0015c76606"
                    />
                </div>
                <div className="col-sm my-2">
                    <ProjectCard 
                        title="Tool Trader"
                        image="https://github.com/crichards17/React-Repository/blob/main/assets/images/toolshare.PNG?raw=true"
                        description="A site for sharing, trading, and borrowing tools: a community tradition, brought to the web."
                        github="https://github.com/crichards17/Toolshare"
                        deployed="https://pacific-tor-20392.herokuapp.com/"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;