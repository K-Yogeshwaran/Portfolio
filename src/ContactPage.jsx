import React from 'react';
import "./ContactPage.css";

import { useState, useEffect } from "react";

import emailjs from "@emailjs/browser";

import { emailId } from './MyDetails';
import { github } from "./MyDetails";

function ContactPage() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState("");


    const [showTooltip, setShowTooltip] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailId);
        setShowTooltip(true);

        // Hide tooltip after 2 seconds
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    function sendEmail(event) {
        event.preventDefault();

        emailjs.send(
            "service_0s3jll3",
            "template_xco9159",
            {
                name: "Portfolio Visitor",
                email: email,
                subject: subject,
                message: message
            },
            "HfMGjGuCN8ad5_j_V"
        )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                },
                (error) => {
                    alert("Failed to send message. Try again.");
                    console.log(error);
                }
            );
    }

    return (
        <div className="entirePage">
            <div className='contactPage'>
                <div className="leftSide">
                    <span className='headerText'>Let's work together</span>
                    <span className='belowHeaderText'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</span>

                    <div className="location">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span>Coimbatore , TamilNadu</span>
                    </div>



                </div>
                <div className="rightSide">
                    <div className="credentialsList">
                        <div className="credential">
                            <div className="icon">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <div className="content">
                                <div className='actualContent'>
                                    <span className='keyName'>Email</span>
                                    <span className='actualValue'>{emailId}</span>
                                </div>
                                <div className="copy-container" onClick={handleCopyEmail}>
                                    <span className='copyBtn'>
                                        <i className="bi bi-copy"></i> Copy
                                    </span>
                                    {showTooltip && <span className="tooltip-popup">Copied!</span>}
                                </div>


                            </div>
                        </div>

                        <div className="credential">
                            <div className="icon">
                                <i class="bi bi-github"></i>
                            </div>
                            <div className="content">
                                <div className='actualContent'>
                                    <span className='keyName'>Github</span>
                                    <span className='actualValue'>{github.id}</span>
                                </div>
                                <div onClick={() => {
                                    window.open(github.link , "_blank" ,"noopener,noreferrer");
                                }}>
                                    <span className='visitBtn'>Visit</span>
                                </div>
                            </div>
                        </div>

                        <div className="credential">
                            <div className="icon">
                                <i class="bi bi-linkedin"></i>
                            </div>
                            <div className="content">
                                <div className='actualContent'>
                                    <span className='keyName'>LinkedIn</span>
                                    <span className='actualValue'>Connect with me</span>
                                </div>
                                <div onClick={() => {
                                    window.open("https://www.linkedin.com/in/yogeshwaran-k-a6208031b/" , "_blank", 
                                        "noopener,noreferrer"
                                    )
                                }}>
                                    <span className='visitBtn'>Visit</span>
                                </div>
                            </div>
                        </div>

                        <div className="credential">
                            <div className="icon">
                                <i class="bi bi-instagram"></i>
                            </div>
                            <div className="content">
                                <div className='actualContent'>
                                    <span className='keyName'>Instagran</span>
                                    <span className='actualValue'>Connect with me</span>
                                </div>
                                <div>
                                    <span className='visitBtn'>Visit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactForm">
                <h1 style={{ color: "var(--text-white)" }}>Message Me</h1>
                <form onSubmit={(event) => sendEmail(event)} className='formDiv'>

                    <input type="email" placeholder='Enter your email ' value={email} required onChange={(event) => setEmail(event.target.value)} />

                    <input type="text" placeholder='Subject' value={subject} onChange={(event) => setSubject(event.target.value)} />

                    <textarea name="message" placeholder='Your message' rows="5" required onChange={(event) => setMessage(event.target.value)} />

                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage