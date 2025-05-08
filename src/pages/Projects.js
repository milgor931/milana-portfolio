import React from "react";
import "./Projects.css";

const projects = [
    { 
        name: "San Diego Dance", 
        link: "san-diego-dance.com", 
        image: "assets/san-diego-dance-logo.png",
        description: "Created a website and maintained monthly newsletter as a part of a bigger vision: to create a hub for all things dance in San Diego." 
    },
    { 
        name: "BACE Engineering", 
        link: "bayareacivilengineers.com", 
        image: "assets/bace-logo.png" 
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="page-title">Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.name}
                        </a>
                        <p className="description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;