import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import 'animate.css';

const Banner3 = () => {
    const history = useHistory()
    const slots = () => {
        history.push('/slots')
    }
    return (
        <>
            <div className="container-fluid banner3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <div className="p-5 bg-dark mt-5 border-0 rounded-3 shadow-lg animate__animated animate__backInLeft">
                                <p className="fs-1 text-white">Provide <span className='text-warning'>International Standard </span>facilities</p>
                                <p className="text-muted">A sad soul can be just as lethal as a germ.</p>
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

export default Banner3;