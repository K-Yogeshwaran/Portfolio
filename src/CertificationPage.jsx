import React from 'react';

import { certifications } from './MyDetails';
import "./CertificationPage.css";


function CertificationPage() {
    return (
        <div className='certificationsPage'>
            <h1 className='headerText'>Certifications</h1>

            <p className='describingText'>Professional certifications that validate my expertise in various technologies and methodologies.</p>


            <div className="certificationsGrid">
                {certifications.map((certificate) => {
                    return (
                        <div key={certificate.title} className='certificateDiv'>
                            <div className="topBar">
                                <i class="bi bi-patch-check certifiedIcon"></i>
                                <div className='titleAndSourceDiv'>
                                    <p className='title'>{certificate.title}</p>
                                    <p className='source'>{certificate.source}</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <i className="bi bi-calendar-event calenderIcon"></i>
                                <p className='period'>{certificate.period}</p>
                            </div>
                            <a href={certificate.link} target='_blank' className='btn'><i className="bi bi-box-arrow-up-right"></i> Verify Credential</a>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}


export default CertificationPage;