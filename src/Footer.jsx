import React from 'react'

import "./Footer.css";

function Footer() {
    return (
        <div style={{ backgroundColor: "#142c65" }}>
            <div className='footer'>
                <div className="firstSection">
                    <a href="#" className='navbar-brand brand-text'>
                        <div class="logo">
                            <span class="logo-bracket">&lt;</span>
                            <span class="logo-name">YK</span>
                            <span class="logo-bracket">/&gt;</span>
                        </div>
                    </a>
                    <span style={{ color: "var(--text-muted)" }}>Building digital experiences with clean code and creative solutions</span>
                </div>

                <div className="secondSection">
                    <span style={{ color: "var(--text-white)" }}>Quick Links</span>
                    <span style={{ color: "var(--text-muted)" }}><a href='#about'>About</a></span>
                    <span style={{ color: "var(--text-muted)" }}><a href='#project'>Projects</a></span>
                    <span style={{ color: "var(--text-muted)" }}><a href='#certifications'>Certifications</a></span>
                    <span style={{ color: "var(--text-muted)" }}><a href='#achievements'>Achievements</a></span>
                    <span style={{ color: "var(--text-muted)" }}><a href='#contact'>Contact</a></span>
                </div>

                <div className="thirdSection">
                    <span className="footerTitle">Connect</span>

                    <span className="connectText">
                        Let's build something together
                    </span>

                    <div className="socialIcons">
                        <a href="https://github.com/K-Yogeshwaran" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/yogeshwaran-k-a6208031b/" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='secondFooter'>
                <span className='endingText'>Built with <i className="bi bi-heart heartSymbol"></i> using React JS</span>
            </div>
        </div>
    )
}

export default Footer;