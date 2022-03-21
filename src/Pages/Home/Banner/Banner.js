import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import 'animate.css';

const Banner = () => {
    const history = useHistory()
    const slots = () => {
        history.push('/slots')
    }
    return (
        <>
            <div className="container-fluid banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <div className="p-5 bg-dark mt-5 border-0 rounded-3 shadow-lg animate__animated animate__backInLeft">
                                <p className="fs-1 text-white">Find the best <span className='text-warning'>Doctors</span> in the <span className='text-warning'>City</span></p>
                                <p className="text-muted">A good laugh and a long sleep are the best cures in the doctor’s book.</p>
                                <button onClick={slots} type="button" className="btn btn-warning text-dark fw-bold btn-lg">Book Now</button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;