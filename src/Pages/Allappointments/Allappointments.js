import React, { useEffect, useState } from 'react';
import Slot from '../Slot/Slot';
import { NavLink } from 'react-router-dom';

const Allappointments = () => {
    const [slots, setSlots] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setSlots(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-warning text-center">All Slots</p>
                <div className="row g-5">
                    {
                        slots.slice(0, 6).map(slot => <Slot
                            key={slot._id}
                            slot={slot}
                        ></Slot>)
                    }
                </div>
                <div className='mt-5'>
                    <nav aria-label="Page navigation example bg-dark">
                        <ul className="pagination">
                            <li className="page-item"><NavLink className="page-link bg-dark text-warning" to="/slots">Previous</NavLink></li>
                            <li className="page-item"><NavLink className="page-link bg-dark text-warning" to="/slots">1</NavLink></li>
                            <li className="page-item"><NavLink className="page-link bg-dark text-warning" to="/slots2">2</NavLink></li>
                            <li className="page-item"><NavLink className="page-link bg-dark text-warning" to="/slots2">Next</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Allappointments;