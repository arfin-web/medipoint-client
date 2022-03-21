import React, { useEffect, useState } from 'react';
import Slot from '../Slot/Slot';

const Slots = () => {
    const [slots, setSlots] = useState([])

    useEffect(() => {
        fetch('https://infinite-anchorage-79745.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setSlots(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-warning fw-bold">Available Slots</p>
                <div className="row g-5">
                    {
                        slots.slice(0, 6).map(slot => <Slot
                            key={slot._id}
                            slot={slot}
                        ></Slot>)
                    }
                </div>
            </div>
        </>
    );
};

export default Slots;