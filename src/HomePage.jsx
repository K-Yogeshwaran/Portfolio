import React from 'react';
import "./HomePage.css";
import AboutPage from './AboutPage';
import ProjectsPage from "./ProjectsPage";
import CertificationPage from './CertificationPage';
import InternshipPage from './InternshipPage';
import AchievementsPage from './AchievementsPage';
import ContactPage from './ContactPage';
import Footer from "./Footer";

function HomePage() {
    return (
        <div className="homePage">
            <div className="home-container min-vh-100 p-5">
                <p className="hero-intro fade-in">Hello, I'm</p>

                <h1 className="hero-name fade-in">Yogeshwaran K</h1>

                <h3 className="hero-role fade-in">
                    Software Developer | Java Developer | AI Enthusiast
                </h3>

                <br />

                <p className="hero-description fade-in">
                    I’m a full-stack developer with a strong interest in modern web technologies,
                    scalable applications, and AI-driven solutions. I enjoy writing clean code,
                    designing intuitive interfaces, and turning ideas into working products.
                </p>

                <br />

                <div className="buttons d-flex gap-3 justify-content-center">
                    <a href="#project" className="btn btn-primary">
                        View My Work <i className="bi bi-arrow-down"></i>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1Ma0jdeaQKAEjsEzEeVfeUPojG0q20CsI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-info"
                    >
                        <i className="bi bi-file-earmark-text"></i> Download Resume
                    </a>
                </div>

                <br />

                <div className="icons d-flex gap-3 justify-content-center">
                    <a
                        href="https://github.com/K-Yogeshwaran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                    >
                        <i className="bi bi-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/yogeshwaran-k-a6208031b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-warning"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>

                <a href="#about" className="downArrow">
                    <i className="bi bi-arrow-down"></i>
                </a>
            </div>

            <section id="about"><AboutPage /></section>
            <section id="project"><ProjectsPage /></section>
            <section id="internship"><InternshipPage /></section>
            <section id="certifications"><CertificationPage /></section>
            <section id="achievements"><AchievementsPage /></section>
            <section id="contact"><ContactPage /></section>

            <Footer />
        </div>
    );
}

export default HomePage;
