import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Myorders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/myappointments?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this Slot ?')
        if (proceed) {
            const url = `http://localhost:5000/myappointments/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingSlots = myOrders.filter(slot => slot._id !== id)
                        setMyOrders(remainingSlots);
                    };
                })
        }
    }
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-warning text-center">My Appointments</p>
                {
                    myOrders.map(order => <div className="card mb-5 border-0 rounded-3 shadow bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={order.image} className="img-fluid rounded-start" alt="appointment" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title fs-3 text-warning">{order.name}</p>
                                    <p className="card-text fs-4 text-muted">Price: $ {order.price}</p>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-warning">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Myorders;