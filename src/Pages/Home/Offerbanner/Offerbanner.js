import React from 'react';
import { useHistory } from 'react-router';

const Offerbanner = () => {
    const history = useHistory();

    const handleDoctor = () => {
        history.push('/slots');
    }

    const handleAppointment = () => {
        history.push('/slots');
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row gx-0">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-dark">
                            <i className="fas fa-user-md fs-1 ms-3 mb-3 mt-2 text-warning"></i>
                            <div className="card-body">
                                <h4 className="card-title text-warning">Doctors Timeline</h4>
                                <p className="card-text text-muted">World Class doctors work with us to give you the best service.</p>
                                <button onClick={handleDoctor} type="button" className="btn btn-warning text-dark fw-bold">See Timeline <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-warning">
                            <i className="fas fa-ambulance fs-1 ms-3 mb-3 mt-2 text-dark"></i>
                            <div className="card-body">
                                <h4 className="card-title text-dark">Emergency Call</h4>
                                <p className="card-text">Our emergency team is always ready and active to give any kind of emergency service. Call anytime to get emergency service.</p>
                                <button type="button" className="btn bg-dark text-white fw-bold"><i className="fas fa-phone-alt"></i> +8801254786</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-dark">
                            <i className="fas fa-id-card fs-1 ms-3 mb-3 mt-2 text-warning"></i>
                            <div className="card-body">
                                <h4 className="card-title text-warning">Make An Appointment</h4>
                                <p className="card-text text-muted">For getting medical or health related services, you have to make an Appointment first.</p>
                                <button onClick={handleAppointment} type="button" className="btn btn-warning text-dark"><i className="fas fa-calendar-check"></i> Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offerbanner;