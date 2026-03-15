import React from "react";

import "./InternshipPage.css";

function InternshipPage() {
    return (
        <div className="internshipPage">
            <h1 className="headerText">Internship</h1>

            <p className="describingText">
                A real-world internship project where I built a full-stack application using the MERN stack,
                with a focus on authentication, role-based access, and scalable architecture.
            </p>

            <div className="internshipCard">
                <div className="topBar">
                    <i className="bi bi-building"></i>
                    <div className="titleWrapper">
                        <p className="internshipTitle">MERN STACK – Better Tomorrow</p>
                        <p className="internshipSubTitle">Internship Project (2025)</p>
                    </div>
                </div>

                <p className="internshipDescription">
                    Developed <strong>ElectroMart</strong>, a full-stack e-commerce web application built using the
                    MERN stack which supports JWT-based authentication, role-based access control, RESTful APIs, and CRUD
                    operations for products, users, cart, and orders. The application features a responsive React UI,
                    secure backend services, and scalable database design using MongoDB and Mongoose.
                </p>

                <div className="techStack">
                    <span className="techStackLabel">Tech Stack:</span>
                    <div className="techStackItems">
                        <span className="techStackItem">React JS</span>
                        <span className="techStackItem">Node JS</span>
                        <span className="techStackItem">Express JS</span>
                        <span className="techStackItem">MongoDB</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternshipPage;
