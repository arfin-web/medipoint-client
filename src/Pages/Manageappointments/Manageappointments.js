import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Manageappointments = () => {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this slot ?')
        if (proceed) {
            const url = `http://localhost:5000/appointments/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingSlots = appointments.filter(slot => slot._id !== id)
                        setAppointments(remainingSlots);
                    };
                })
        }
    }

    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-warning text-center">Manage Appointments</p>
                <div className="row g-5">
                    {
                        appointments.map(slot => <div className="col-lg-4 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-sm bg-dark">
                                <img src={slot.image} className="card-img-top" alt="toy" />
                                <div className="card-body">
                                    <p className="card-title fs-4 text-warning">{slot.name}</p>
                                    <p className="card-text text-muted">{slot.description}</p>
                                    <p className="card-title fs-4 text-muted">Price: $ {slot.price}</p>
                                    <button onClick={() => handleDelete(slot._id)} type="button" className="btn btn-outline-warning mt-4">Delete</button>
                                    <NavLink to={`appointment/${slot._id}`}>
                                        <button type="button" className="btn btn-warning text-dark ms-2 mt-4">Update</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Manageappointments
    ;