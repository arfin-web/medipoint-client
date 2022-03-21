import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allappointments')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleStatus = (id) => {
        const proceed = window.confirm('book this Slot ?')
        if (proceed) {
            const url = `http://localhost:5000/allappointments/${id}`;
            fetch(url, {
                method: "PUT",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('successfully booked')
                    };
                })
        }
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this slot ?')
        if (proceed) {
            const url = `http://localhost:5000/allappointments/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingSlot = orders.filter(slot => slot._id !== id)
                        setOrders(remainingSlot);
                    };
                })
        }
    }
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-warning text-center">Booked Appointments</p>
                {
                    orders.map(order => <div className="card mb-5 border-0 rounded-3 shadow bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={order.image} className="img-fluid rounded-start" alt="slots" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title fs-3 text-warning">{order.name}</p>
                                    <p className="card-text fs-4 text-muted">Price: $ <span className="text-warning">{order.price}</span></p>
                                    <p className="card-text fs-6">Status:  <span className="text-success">{order.status}</span></p>
                                    <button onClick={() => handleStatus(order._id)} className="btn btn-outline-warning me-2">Booked</button>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-warning">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Orders;