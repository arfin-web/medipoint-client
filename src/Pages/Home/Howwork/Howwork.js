import React from 'react';
import Step from './Step/Step';
import StepPic from '../../../Images/step.svg';

const Howwork = () => {
    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={StepPic} className="img-fluid mt-5" alt="steps" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <h4 className="fw-bold text-warning mt-5">How We Work</h4>
                        <h2 className="text-white fw-bold">A Comprehensive Directory For Your Health Care</h2>
                        <p className="text-muted">Please Read all the steps carefully for getting our wonderful services properly.</p>
                        <Step></Step>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Howwork;