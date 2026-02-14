import React from 'react';

import { projects } from "./MyDetails.js";

import "./ProjectsPage.css";

function ProjectsPage() {
    return (
        <div className='projectsPage'>
            <h1 className='headerText'>Projects</h1>

            <p className='describingText'>Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.</p>


            <div className="projectsGrid">
                {projects && projects.map((project, index) => {
                    return (
                        <div key={project.name} className="projectCard ">
                            <div className="topBarProject">

                                <i className="bi bi-folder2 folderLogo"></i>


                                <div className="endLogos">
                                    <a href={project.github} target='_blank'><i className="bi bi-github"></i></a>
                                    <a href={project.link} target='_blank'><i className="bi bi-box-arrow-up-right"></i></a>
                                </div>
                            </div>
                            <p className='projectTitle'>{project.name}</p>
                            <p className='projectDescription'>{project.description}</p>

                            <div className="techStackGrid">
                                {project.techStack.map((tech) => {
                                    return (
                                        <div key={tech} className='techStackDiv'>{tech}</div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default ProjectsPage