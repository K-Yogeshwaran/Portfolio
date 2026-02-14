import React from 'react';

import "./Navbar.css";

function Navbar() {
    return (
        <div className='navbar navbar-expand-md navbar-dark custom-nav'>
            <div className="container ">
                <a href="#" className='navbar-brand brand-text'>
                    <div className="logo">
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-name">YK</span>
                        <span className="logo-bracket">/&gt;</span>
                    </div>
                </a>

                <button className="navbar-toggler" data-bs-target="#mainNav" data-bs-toggle="collapse"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-center' id='mainNav'>
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item '><a href="#about" className='nav-link '>About</a></li>
                        <li className='nav-item'><a href="#project" className='nav-link '>Projects</a></li>
                        <li className='nav-item'><a href="#certifications" className='nav-link '>Certifications</a></li>
                        <li className='nav-item'><a href="#achievements" className='nav-link '>Achievements</a></li>
                        <li className='nav-item'><a href="#contact" className='nav-link '>Contact</a></li>
                    </ul>
                </div>



            </div>



        </div>
    )
}

export default Navbar;