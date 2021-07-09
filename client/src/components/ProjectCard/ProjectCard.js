import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="d-flex justify-content-around py-1 bg-light">
                <a href={props.deployed} className="btn btn-dark text-light">Deployed App</a>
                <a href={props.github} className="btn btn-secondary">Repository</a>
            </div>
        </div>
    )
}

export default ProjectCard;