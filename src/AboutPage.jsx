import React from 'react';
import { noOfProjects, techStacks } from "./MyDetails";
import "./AboutPage.css";

import profileImg from "./assets/yogesh_photo.jpg";


function AboutPage() {
    return (
        <section className="aboutPage">

    {/* Top: Image + Description */}
    <div className="aboutTop">

        <div className="aboutImageWrapper">
            <img
                loading="lazy"
                src={profileImg}
                alt="Yogeshwaran K"
                className="aboutImage"
            />
        </div>

        <div className="aboutContent">
            <h1 className="knowMeTxt">About me</h1>

            <p className="about-description">
                I’m a passionate software developer with a strong interest in building scalable,
                real-world applications. I work across both frontend and backend technologies,
                focusing on writing clean, efficient, and maintainable code while delivering
                intuitive and user-friendly experiences.
                <br /><br />
                Beyond coding, I actively explore emerging technologies, work on personal and
                collaborative projects, participate in hackathons, and share knowledge with the
                developer community.
            </p>

            <div className="projectsCompleted">
                <span className="NoOfProjecs">{noOfProjects}+</span>
                <span className="projectsText">Projects Completed</span>
            </div>
        </div>

    </div>

    {/* Bottom: Tech stacks */}
    <div className="techStacksSection">
        <p className="techTitle">Tech Stacks</p>

        {techStacks.map((section, index) => (
            <div key={index} className="techStacksTotalDiv">
                <span className="categoryHeader">{section.category}</span>

                <div className="techGrid">
                    {section.items.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div key={tech.name} className="techStackBox">
                                <Icon className="techIcons" aria-label={tech.name} />
                                {tech.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
    </div>

</section>

    );
}

export default AboutPage;
