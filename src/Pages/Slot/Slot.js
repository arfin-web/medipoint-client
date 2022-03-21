import React from 'react';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Slot = ({ slot }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <Zoom>
                    <div className="card border-0 rounded-3 shadow-sm bg-dark">
                        <img src={slot.image} className="card-img-top" alt="toy" />
                        <div className="card-body">
                            <p className="card-title fs-4 text-warning">{slot.name}</p>
                            <p className="card-text text-muted">{slot.description}</p>
                            <p className="card-text text-white"><span className='text-warning'>Available:</span> {slot.time}</p>
                            <p className="card-title fs-4 text-warning">Price: $ {slot.price}</p>
                            <NavLink to={`/slots/${slot._id}`}>
                                <button type="button" className="btn btn-outline-warning mt-4">Book Now</button>
                            </NavLink>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    );
};

export default Slot;