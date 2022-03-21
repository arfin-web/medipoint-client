import React from 'react';
import './About.css';

const About = () => {
    const aboutimg = 'https://thumbs.dreamstime.com/b/mental-health-protection-care-young-woman-s-hand-drawn-brain-black-background-collage-mental-health-protection-care-174181663.jpg';
    return (
        <>
            <div className="container-fluid about-container mb-5">
                <p className="about-title text-white">About Us</p>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={aboutimg} className="img-fluid shadow-lg" alt="about" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-warning mb-5">About Our Hospital</p>
                        <p className="text-muted">Welcome to the best Hospital in the City.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;