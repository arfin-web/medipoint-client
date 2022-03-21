import React from 'react';

const Step = () => {
    return (
        <>
            <div className="card mb-3 border-0 rounded-3 shadow-lg bg-dark">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="w-75 bg-warning my-auto p-5">
                            <i className="fas fa-id-card fs-1 text-dark"></i>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title fw-bold mt-4 text-white">Book An Appointment</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 border-0 rounded-3 shadow-lg bg-dark">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="w-75 bg-warning my-auto p-5">
                            <i className="fas fa-user-check fs-1 text-dark"></i>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title fw-bold mt-4 text-white">Conduct Cheakup</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 rounded-3 border-0 shadow-lg bg-dark">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="w-75 bg-warning my-auto p-5">
                            <i className="fas fa-street-view fs-1 text-dark"></i>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title fw-bold mt-4 text-white">Perform Treatment</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 border-0 rounded-3 shadow-lg bg-dark">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="w-75 bg-warning my-auto p-5">
                            <i className="fas fa-money-check fs-1 text-dark"></i>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title fw-bold mt-4 text-white">Prescribe and Payment</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step;